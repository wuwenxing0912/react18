import useSWRInfinite from "swr/infinite";
import { ajax } from "../../lib/ajax";
import styled from "styled-components";

// interface Props {
//   items: Item[]
// }

const getKey = (pageIndex: number, prev: Resources<Item>) => {
  if (prev) {
    const sendCount =
      (prev.pager.page - 1) * prev.pager.per_page + prev.resources.length;
    const count = prev.pager.count;
    if (sendCount >= count) {
      return null;
    }
  }
  return `/api/v1/items?page=${pageIndex + 1}`;
};

const Div = styled.div`
  padding: 16px;
  text-align: center;
`;

export const ItemsList: React.FC = () => {
  const { data, error, size, setSize } = useSWRInfinite(
    getKey,
    async (path: string) => (await ajax.get<Resources<Item>>(path)).data
  );
  const loadMore = () => setSize(size + 1);
  console.log(data, error);
  const isLoadingInitialData = !data && !error;
  const isLoadingMore = data?.[size - 1] === undefined && !error;
  const isLoading = isLoadingInitialData || isLoadingMore;
  if (!data) {
    return (
      <div>
        {error && <Div>数据加载失败，请刷新页面</Div>}
        {isLoading && <Div>数据加载中...</Div>}
      </div>
    );
  } else {
    const last = data[data.length - 1];
    // const
    const hasMore =
      (last.pager.page - 1) * last.pager.per_page + last.resources.length <
      last.pager.count;
    return (
      <>
        <ol>
          {data
            .map(({ resources }) =>
              resources.map((item) => (
                <li
                  key={item.id}
                  grid
                  grid-cols="[auto_1fr_auto]"
                  grid-rows-2
                  px-16px
                  py-8px
                  gap-x-12px
                  border-b-1
                  b="#EEE"
                >
                  <div
                    row-start-1
                    col-start-1
                    row-end-3
                    col-end-2
                    text-24px
                    w-48px
                    h-48px
                    bg="#D8D8D8"
                    rounded="50%"
                    flex
                    justify-center
                    items-center
                  >
                    😘
                  </div>
                  <div row-start-1 col-start-2 row-end-2 col-end-3>
                    旅行
                  </div>
                  <div
                    row-start-2
                    col-start-2
                    row-end-3
                    col-end-4
                    text="#999999"
                  >
                    2011年1月1日
                  </div>
                  <div
                    row-start-1
                    col-start-3
                    row-end-2
                    col-end-4
                    text="#53A867"
                  >
                    {item.amount / 1000}
                  </div>
                </li>
              ))
            )
            .flat()}
        </ol>
        {error && <Div>数据加载失败，请刷新页面</Div>}
        {!hasMore ? (
          <Div>没有更多数据了</Div>
        ) : isLoading ? (
          <Div>数据加载中...</Div>
        ) : (
          <Div>
            <button j-btn onClick={loadMore}>
              加载更多
            </button>
          </Div>
        )}
      </>
    );
  }
};
