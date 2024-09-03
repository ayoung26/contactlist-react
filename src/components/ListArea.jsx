import List from "./List";
import SearchCon from "./SearchCon";
import '../css/ListArea.css';
import DetailModal from "./modal/DetailModal";
import { useState } from "react";

export default function ListArea({ data, handleDelete, handleAllList, handleSearch }) {

  // 모달 상세데이터
  const [detailItem, setDetailItem] = useState(null);
  const handleShowDetail = (item) => {
    setDetailItem(item);
  }

  // 모달 닫기
  const handleClose = () => {
    setDetailItem(null);
  }

  return (
    <section className='listSec'>
      <SearchCon handleAllList={handleAllList} handleSearch={handleSearch} />
      <div className='listArea'>
        <ul className='listUl'>
          {
            data.map((item, idx) => (
              < List
                key={idx}
                id={idx}
                name={item.name}
                phone={item.phone}
                group={item.group}
                memo={item.memo}
                handleDelete={handleDelete}
                handleShowDetail={handleShowDetail}
              />
            ))
          }
        </ul>
        {
          detailItem
          &&
          <DetailModal item={detailItem} handleClose={handleClose} />
        }
      </div>
    </section>
  );
};