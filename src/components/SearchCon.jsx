export default function SearchCon({ handleAllList, handleSearch }) {

  // 검색
  const callSearch = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value;
      handleSearch(value);
    }
  }

  // 전체 리스트 보기
  const callAllList = () => {
    document.getElementById('searchInput').value = '';
    handleAllList();
  }

  return (
    <div className='searchCon'>
      <input type="text" id="searchInput" onKeyDown={callSearch} placeholder='검색어를 입력 후 엔터를 누르세요' />
      <button className='showAllBtn' onClick={callAllList}>전체리스트 보기</button>
    </div>
  );
};
