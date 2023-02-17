import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCheck, faGear } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { Popover, OverlayTrigger, Button, Container } from "react-bootstrap";

interface PopoversNavigationProps {}

const PopoversNavigation: React.FC<PopoversNavigationProps> = (
  props
) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header
        as="h3"
        className="bg-white d-flex justify-content-between"
      >
        <div>Notifications</div>
        <Container className="d-flex justify-content-end p-0 gap-3">
          <FontAwesomeIcon icon={faCheck} />
          <FontAwesomeIcon icon={faGear} />
        </Container>
      </Popover.Header>
      <Popover.Body className="d-flex flex-column gap-3 text-center">
        <div>
          Some notification Some notification Some notification Some
          notification
        </div>
        <div>Some notification</div>
        <div>Some notification Some notification Some notification</div>
      </Popover.Body>
    </Popover>
  );

  const Example = () => (
    <OverlayTrigger trigger="click" placement="bottom-end" overlay={popover}>
      <Button variant="btn btn-link">
        <FontAwesomeIcon icon={faBell} />
      </Button>
    </OverlayTrigger>
  );

  return <Example />;
};

export { PopoversNavigation };
