export default function List({ id, name, phone, group, memo, handleDelete, handleShowDetail }) {

  // 세부사항 확인
  const callDetailModal = () => {
    handleShowDetail({ name, phone, group, memo });
  }

  // 삭제 처리
  const callDelete = () => {
    handleDelete(id);
  }

  return (
    <li className='listLi' id={id}>
      <span>{name} {phone} {group}</span>
      <button className='showDetailBtn' onClick={callDetailModal}>세부사항</button>
      <button className='deleteBtn' onClick={callDelete}>삭제</button>
    </li>
  );
};
