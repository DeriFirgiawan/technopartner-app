import { Icon } from '@iconify/react';

const CardBalance = ({content = '-', onModal}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title date">{content.greeting},</h6>
        <h5 className="card-title name">{content.name}</h5>
        <div className="wrapper">
          <div className="wrapp">
            <div className="wrapper-code" onClick={onModal}>
              <Icon icon="ic:baseline-qr-code-2" fontSize={48} />
            </div>
          </div>
          <div className="balance">
            <div className="wrapp">
              <h6 className="balance-title">Saldo</h6>
              <h6 className="balance-title">Points</h6>
            </div>
            <div className="wrapp">
              <h6 className="balance-value">Rp {content.saldo}</h6>
              <h6 className="balance-value">{content.point}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBalance;
