import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'status'} />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("status");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'status'} />);
        const instance = component.root;
        const span = instance.findByType('span')
        expect(span.children[0]).toBe('status');
    });
    test("<input> should be desplayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status={'status'} />);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('status');
    });
});