import React from "react";

//Styles
import "./style.scss";

const FloatingBox = ({ visible, setVisible, price, onConfirm }) => {
  return (
    visible && (
      <div className="floating-box-container">
        <div className="box-details">
        <div className="closing" onClick={() => setVisible(false)}>
          <span></span>
          <span></span>
        </div>
          <h4>السعر النهائي</h4>
          <div className="price">{price} ج.م</div>
          <div className="action-buttons">
            <div className="confirm-button">
              <button>تأكيد</button>
            </div>
            <div className="cancel-button">
              <button>إلغاء</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default FloatingBox;
