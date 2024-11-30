import React from "react";
import { Dropdown, Badge } from "react-bootstrap";
import "./NotificationDropdown.scss";
const notifications = [
  { id: 1, type: "New Leads Assigned", count: 60 },
  { id: 2, type: "New Reward Added", count: 2 },
  { id: 3, type: "IDV Approved", count: 2 },
  { id: 4, type: "Discount Approved", count: 5 },
  { id: 5, type: "Follow Up Pending", count: 10 },
];

const NotificationsDropdown = () => {
  return (
    <Dropdown align="end" className="notification-main">
      <Dropdown.Toggle
        variant="light"
        id="dropdown-basic"
        className="custom-dropdown-toggle"
      >
        <i className="bi bi-bell icon-background"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="dropdown-header d-flex justify-content-between align-items-center">
          <span>
            Notifications <span className="text-primary">(20)</span>
          </span>
          <a
            href="#!"
            className="text-primary"
            style={{ fontSize: "14px", textDecoration: "none" }}
          >
            Clear All
          </a>
        </div>
        <hr />
        {notifications.map((notification) => (
          <Dropdown.Item
            key={notification.id}
            className="d-flex justify-content-between align-items-center gap-5 ms-2"
            style={{
              padding: "var(--spacing-4, 10px)",
              gap: "var(--spacing-2-5, 10px)",
            }}
          >
            <span>{notification.type}</span>
            <Badge className="me-2 count-header">{notification.count}</Badge>
          </Dropdown.Item>
        ))}
        <Dropdown.Item className="text-center">
          <a href="#!" className="text-primary">
            See All Notifications
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationsDropdown;
