export default function DetailModal({ item, handleClose }) {
  return (
    <div className='modalArea'>
      <div className='modalCon'>
        <button className='closeBtn' onClick={handleClose}>닫기</button>
        <h2>연락처 상세 정보</h2>
        <p>이름 : <span>{item.name}</span></p>
        <p>전화번호 : <span>{item.phone}</span></p>
        <p>그룹 : <span>{item.group}</span></p>
        <p>메모 : <span>{item.memo}</span></p>
      </div>
    </div>
  );
};
