import React, {
  FC,
  useState,
  useMemo,
  useRef,
  forwardRef,
  useImperativeHandle,
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

    const items = useMemo(() => {
      const temp: any[] = [];
      for (let i = startIndex; i <= endIndex; i++) {
        temp.push({
          data: data[i],
          style: {
            position: "absolute",
            // top: `${i * itemHeight}px`,
            transform: `translate3d(0, ${i * itemHeight}px, 0)`,
            width: "100%",
          },
        });
      }
      return temp;
    }, [data, endIndex, itemHeight, startIndex]);

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
            <Item style={item.style} key={index}>
              {item.data}
            </Item>
          ))}
        </Inner>
      </Wrapper>
    );
  }
);
