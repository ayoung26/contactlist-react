import { useState } from "react";
import GroupModal from './modal/GroupModal';

export default function SelectEl({ label, id, value, onChange }) {

  const [isGroupModal, setIsGroupModal] = useState(false);
  const openGroupModal = () => setIsGroupModal(true);
  const closeGroupModal = () => setIsGroupModal(false);

  return (
    <div className='groupArea'>
      <label htmlFor={id}>{label}</label>
      <select name="group" id={id} value={value} onChange={onChange}>
        <option value="">선택</option>
        <option value="가족">가족</option>
        <option value="친구">친구</option>
        <option value="직장">직장</option>
        <option value="스터디">스터디</option>
      </select>
      <button className='addGroupBtn' onClick={openGroupModal}>조직추가</button>
      {
        isGroupModal
        &&
        <GroupModal closeGroupModal={closeGroupModal} />
      }
    </div>
  );
};
