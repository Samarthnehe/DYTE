import React from 'react';
import './Code.css'

function Code() {
    return (
        <div className="code">
            <div className="options">
                <div className="options__header"> File Explorer</div>
                <div className="files">
                    <div className="filename">index.html</div>
                    <div className="filename">index.css</div>
                    <div className="filename">index.js</div>
                </div>
            </div>
            <div className="editor">
                <div className="editor__header"> Editor</div>
                <div className="coding">
                    <div className="coding__type">

                    </div>
                </div>
            </div>
            <div className="view">
                <div className="view__header"> Output</div>
                <div className="view__code">

                </div>
            </div>
        </div>
    )
}

export default Code
