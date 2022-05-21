import React, {
  FC,
  useState,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import styled from "styled-components";
import { smoothScroll } from "@/utils/smoothScroll";

const Wrapper = styled.div`
  width: 100%;
  background-color: pink;
  position: relative;
`;

const Inner = styled.div`
  position: relative;
`;

const Item = styled.div`
  width: 100%;
  text-align: center;
  line-height: 40px;
`;

interface IVirtualListProps {
  itemHeight: number;
  windowHeight: number;
  data: any[];
  overscan?: number;
  ref?: React.ForwardedRef<HTMLDivElement>;
}

interface ImperativeHandle extends HTMLDivElement {
  scrollToIndex(index: number): void;
}

interface IChildProps {
  style: React.CSSProperties;
  index: number;
  data: any;
  cache: any[];
}

const estimatedItemHeight = 40;

const Child: FC<IChildProps> = ({ style, data, cache, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (itemRef.current) {
      const { top } = itemRef.current.getClientRects()[0];
      if (!cache[index]) {
        cache.push({
          index,
          top,
        });
      }
    }
  }, [cache, index]);
  return (
    <Item ref={itemRef} style={style}>
      {data}
    </Item>
  );
};

export const XVirtual: FC<IVirtualListProps> = forwardRef(
  (
    { itemHeight, windowHeight, data },
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const [scrollTop, setScrollTop] = useState<number>(0);
    const numItems = data.length;
    const innerHeight = numItems * itemHeight;
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      numItems - 1, // don't render past the end of the list
      Math.floor((scrollTop + windowHeight) / itemHeight)
    );

    const VirtualRef = useRef<HTMLDivElement>(null);

    const cacheRef = useRef<any>([]);

    const cache = cacheRef.current;

    const items = useMemo(() => {
      const temp: any[] = [];
      for (let i = startIndex; i <= endIndex; i++) {
        temp.push({
          data: data[i],
          style: {
            position: "absolute",
            // top: `${i * itemHeight}px`,
            transform: `translate3d(0, ${i * estimatedItemHeight}px, 0)`,
            width: "100%",
          },
          index: i,
        });
      }
      return temp;
    }, [data, endIndex, startIndex]);

    // console.log("items", items);

    const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(e.currentTarget.scrollTop);
    };

    const scrollToIndex = (index: number) => {
      const h = index * itemHeight;
      smoothScroll({ ele: VirtualRef?.current, h });
    };

    useImperativeHandle(
      ref,
      () =>
        ({
          scrollToIndex,
        } as ImperativeHandle)
    );

    return (
      <Wrapper
        ref={VirtualRef}
        style={{
          height: windowHeight,
          overflowY: "scroll",
        }}
        onScroll={onScroll}
      >
        <Inner style={{ height: `${innerHeight}px` }}>
          {items.map((item, index) => (
            <Child key={index} {...item} index={item.i} cache={cache} />
          ))}
        </Inner>
      </Wrapper>
    );
  }
);
