export default function GroupModal({ closeGroupModal }) {
  return (
    <div className='modalArea'>
      <div className='modalCon'>
        <button className='closeBtn' onClick={closeGroupModal}>닫기</button>
        <h2>그룹관리</h2>
        <div className='listArea'>
          <span>가족</span>
          <i className='deleteBtn'>X</i>
        </div>
        <div className='inputArea'>
          <input type="text" />
          <button className='addBtn'>추가</button>
        </div>
      </div>
    </div>
  );
};
