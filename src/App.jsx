import './App.css'
import './css/Modal.css'
import InputCon from './components/InputCon'
import ListArea from './components/ListArea'
// import GroupModal from './components/modal/GroupModal';
import { useState } from 'react';

function App() {

  // localStorage 저장된 연락처 데이터
  const [data, setData] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem('listData')) || [];
    return storageData;
  });
  // 검색 설정
  const [searchTerm, setSearchTerm] = useState('');

  // 새로운 값 저장
  const handleSave = (newData) => {
    const updateData = [...data, newData];
    setData(updateData);
    localStorage.setItem('listData', JSON.stringify(updateData));
  }

  // 삭제처리
  const handleDelete = (id) => {
    const updateData = data.filter((item, idx) => idx !== id);
    setData(updateData);
    localStorage.setItem('listData', JSON.stringify(updateData));
  }

  // 리스트 검색
  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  // 리스트 전체보기
  const handleAllList = () => {
    setSearchTerm(''); // 초기화상태
  }

  // 검색어가 있으면 필터링 / 없으면 전체 데이터
  const filteredData = searchTerm ? data.filter(item =>
    item.name.includes(searchTerm) ||
    item.phone.includes(searchTerm) ||
    item.group.includes(searchTerm) ||
    item.memo.includes(searchTerm)
  ) : data;

  return (
    <div className='container'>
      <header className='mw'>
        <h1>연락처 리스트</h1>
      </header>
      <main className='mw'>
        <InputCon handleSave={handleSave} />
        <ListArea
          data={filteredData}
          handleDelete={handleDelete}
          handleSearch={handleSearch}
          handleAllList={handleAllList}
        />
      </main>
    </div>
  )
}

export default App
