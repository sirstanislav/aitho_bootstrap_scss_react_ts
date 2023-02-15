import { DropdownButton, Dropdown } from "react-bootstrap";

export default function ProfileDropdown() {
  return (
    <DropdownButton align="end" title="SS" variant="rounded-circle border-0">
      <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
      <Dropdown.Item eventKey="2">Grades</Dropdown.Item>
      <Dropdown.Item eventKey="3">Calendar</Dropdown.Item>
      <Dropdown.Item eventKey="4">Private files</Dropdown.Item>
      <Dropdown.Item eventKey="5">Reports</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="6">Preferences</Dropdown.Item>
      <DropdownButton
        drop="start"
        title="Language"
        variant="border border-0"
        flip={true}
      >
        <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
        <Dropdown.Item eventKey="2">Grades</Dropdown.Item>
      </DropdownButton>
      <Dropdown.Item eventKey="8">Private files</Dropdown.Item>
      <Dropdown.Item eventKey="9">Reports</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="10">Log out</Dropdown.Item>
    </DropdownButton>
  );
}
