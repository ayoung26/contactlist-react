import { useState } from "react";
import InputEl from "./InputEl";
import SelectEl from "./SelectEl";
import '../css/InputCon.css';

export default function InputCon({ handleSave }) {

  // form 데이터 변수
  const [formData, setFormData] = useState({
    name: '', phone: '', group: '', memo: ''
  })
  // 유효성 체크용 변수
  const [errCheck, setErrCheck] = useState({
    name: '', phone: '', empty: ''
  });

  // form 데이터
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  // 유효성 체크
  const validate = () => {
    let isValid = true;
    let errCheck = {};

    if (!/^[가-힣]{2,}$/.test(formData.name)) {
      errCheck.name = '이름은 한글로 2글자 이상 입력해주세요';
      isValid = false;
    } else {
      errCheck.name = '';
    }

    if (!/^\d{3}-\d{4}-\d{4}$/.test(formData.phone)) {
      errCheck.phone = '전화번호는 010-0000-0000 형식으로 입력해주세요';
      isValid = false;
    } else {
      errCheck.phone = '';
    }

    if (!formData.name || !formData.phone || !formData.group || !formData.memo) {
      errCheck.empty = '모든 값이 입력되었는지 확인해주세요';
      isValid = false;
    } else {
      errCheck.empty = '';
    }

    setErrCheck(errCheck);
    return isValid;
  }

  // localStorage 저장
  const callSave = () => {
    if (validate()) {
      handleSave(formData);
      alert('저장 완료되었습니다.');

      // 초기화
      setFormData({
        name: '', phone: '', group: '', memo: ''
      });
    }
  }

  return (
    <section className='inputSec'>
      <div className='inputCon'>
        <InputEl label="이름" id="name" placeholder="이름" value={formData.name} onChange={handleChange} />
        {errCheck.name ? <p className="error">{errCheck.name}</p> : ""}
        <InputEl label="전화번호" id="phone" placeholder="전화번호" value={formData.phone} onChange={handleChange} />
        {errCheck.phone ? <p className="error">{errCheck.phone}</p> : ""}
        <SelectEl label="그룹" id="group" value={formData.group} onChange={handleChange} />
        <InputEl label="간단한기록" id="memo" placeholder="간단한기록" value={formData.memo} onChange={handleChange} />
        {errCheck.empty ? <p className="error">{errCheck.empty}</p> : ""}
        <button className='saveBtn' onClick={callSave}>저장</button>
      </div>
    </section>
  );
};