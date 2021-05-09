import {Paginator} from "./Paginator";
import {create} from "react-test-renderer";

import React from "react";

describe('Paginator should', () => {

    test('show 10 pages even if amount of pages bigger then 10', () => {
        const component = create(<Paginator totalCount={11} pageSize={1} porsitionSize={10} />)
        const root = component.root;
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    });

    test('show Next button', () => {
        const component = create(<Paginator totalCount={11} pageSize={1} porsitionSize={10} />)
        const root = component.root;
        let button = root.findAllByType('button')
        expect(button.length).toBe(1)
    })
})