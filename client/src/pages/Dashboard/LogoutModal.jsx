import React from "react";
import { LogOut, X } from "lucide-react";
import "./dashboard.css";
const LogoutModal = ({ isOpen, onClose, onConfirm, userInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-icon-wrapper">
              <LogOut className="modal-icon" size={20} />
            </div>
            <h2 className="modal-title">Confirm Logout</h2>
          </div>
          <button onClick={onClose} className="modal-close-button">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          <p className="modal-message">
            Are you sure you want to logout from your account?
          </p>

          {userInfo && (
            <div className="user-info-card">
              <p className="user-info-label">Logged in as:</p>
              <p className="user-info-name">{userInfo.fullName}</p>
              <p className="user-info-email">{userInfo.email}</p>
            </div>
          )}

          <div className="warning-message-box">
            <p className="warning-message">
              <strong>Note:</strong> Any unsaved changes will be lost. Make sure
              to save your course order before logging out.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <button onClick={onClose} className="btn-modal-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-modal-logout">
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
