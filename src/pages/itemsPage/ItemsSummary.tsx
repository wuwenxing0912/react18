export const ItemsSummary: React.FC = () => {
  return (
    <ol
      flex
      justify-between
      items-center
      m-16px
      py-12px
      px-16px
      bg="#252A23"
      rounded-8px
      text-center
      children-px-24px
    >
      <li text="#FE7275">
        <div>收入</div>
        <div>1000</div>
      </li>
      <li text="#53A867">
        <div>支出</div>
        <div>1000</div>
      </li>
      <li text-white>
        <div>净收入</div>
        <div>1000</div>
      </li>
    </ol>
  );
};
