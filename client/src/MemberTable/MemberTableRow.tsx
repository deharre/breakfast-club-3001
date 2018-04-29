import * as React from 'react';
import { IMember } from '../Models/Member';
import { MemberActiveToggle } from './MemberActiveToggle';
import { UpDownButtons } from './UpDownButtons';
import { IMemberTableActions } from './MemberTableActions';

interface IMemberTableRowProps {
    member: IMember;
    actions: IMemberTableActions;
}

export class MemberTableRow extends React.Component<IMemberTableRowProps, {}> {
    constructor(props) {
        super(props);
    }

    private renderRemoveButton(actions: IMemberTableActions, member: IMember) {
        return (
            <button type="button"
                className="btn btn-danger btn-sm"
                onClick={(e) => actions.deleteMember(e, member.id)}>
                Remove
            </button>
        );
    }

    private renderAddButton(actions: IMemberTableActions, member: IMember) {
        if(member.rotationOrder === 1) {
            return (<button type="button"
                className="btn btn-primary btn-sm"
                onClick={(e) => actions.addArrivalEntry(e, member.id)}>Add Arrival</button>);
        } else {
            return null;
        }
    }

    render() {
        const member = this.props.member;
        const actions = this.props.actions;

        return (
            <tr>
                <td>
                    <UpDownButtons upAction={actions.memberUp} downAction={actions.memberDown} memberId={member.id} />
                </td>
                <td>
                    {member.rotationOrder}
                </td>
                <td>
                    {member.firstName}
                </td>
                <td>
                    {member.lastName}
                </td>
                <td>
                    {member.slackUsername}
                </td>
                <td>
                    <MemberActiveToggle member={member} updateAction={actions.updateMember} />
                </td>
                <td>
                    { this.renderRemoveButton(actions, member) }
                    { this.renderAddButton(actions, member) }
                </td>
            </tr>
        );
    }
}