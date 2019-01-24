import React from 'react';
import styles from './RegisterForm.scss';
import classNames from 'classnames/bind';

import {
  SectionWithTitle,
  Input,
  SelectCurrency,
  Button,
  AlignRight,
  InitialMoneyOptions
} from 'components';


const cx = classNames.bind(styles);

const RegisterForm = ({
  nickname,
  currency,
  optionIndex,
  onChangeNickname,
  onSetCurrency,
  onSelectOptionIndex,
  onSubmit
}) => {
  return (
    <div className={cx('register-form')}>
      <SectionWithTitle title="닉네임" description="서비스에서 사용 하실 닉네임을 입력하세요."> 
        <Input value={nickname} onChange={onChangeNickname}/>
      </SectionWithTitle>
      <SectionWithTitle title="초기자금 설정"> 
        <div className={cx('description')}>
          모의 거래소에서 사용 할 초기자금을 설정하세요. {"\r\n"}초기 자금은 언제든지 설정페이지에서 초기화 할 수 있습니다.
        </div>
        <h4>
          화폐 선택
        </h4>
        <SelectCurrency currency={currency} onSetCurrency={onSetCurrency}/>
        <h4>금액 선택</h4>
        <InitialMoneyOptions currency={currency} optionIndex={optionIndex} onSelect={onSelectOptionIndex}/>
      </SectionWithTitle>
      <AlignRight>
        <Button flat color="teal" className={cx('register-button')} xPadding="2rem" onClick={onSubmit}>가입</Button>
      </AlignRight>
    </div>
  );
};

export default RegisterForm;