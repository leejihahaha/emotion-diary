import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const ControlMenu = (value, onChange, optionList) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList &&
        optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  // 정렬 (lastest:최신순위)
  const [sortType, setSortType] = useState("lastest");
  const compare = (a, b) => {
    if (sortType === "latest") {
      return parseInt(b.data) - parseInt(a.data);
    } else {
      return parseInt(a.data) - parseInt(b.data);
    }
  };

  //getProcessedDiaryList: 정렬된 리스트를 반환하는 역할
  const getProcessedDiaryList = () => {
    //diaryList깊은복사 (stringify문자열-> parse배열)
    const copyList = JSON.parse(JSON.stringify(diaryList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
