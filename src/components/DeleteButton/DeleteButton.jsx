import React, { Component } from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';

export class DeleteButton extends Component {
  render() {
    const {
      item: { id },
      onDelete,
    } = this.props;
    return (
      <div>
        <button aria-label="Delete" onClick={() => onDelete(id)}>
          <FcDeleteDatabase size="16px" />
        </button>
      </div>
    );
  }
}
