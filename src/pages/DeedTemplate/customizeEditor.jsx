import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js'; //updated
import draftToHtml from 'draftjs-to-html'; 
import Pdf from "react-to-pdf";
import { Row, Col, Container, Card, Button, Form } from 'react-bootstrap'
import './DeedOfTransfer/deedOfTransfer.css'
import { PDFExport } from '@progress/kendo-react-pdf';

const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));
const ref = React.createRef(null);

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };
    }
    onEditorStateChange = editorState => {
        this.setState({ editorState });
    };
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="rich-editor demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    wrapperStyle={{ border: "1px solid black" }}
                    placeholder="Start Typing..." />
                 <div style={{
                    position: "absolute",
                    left: "-1000px",
                    top: 0
                    }}>
                <PDFExport paperSize="legal" margin="1.5cm" fileName="Customize Deed.pdf" ref={ref}>
                    <div style={{
                        width: "500px"
                    }}>
                            {getHtml(editorState)}
                    </div>
                </PDFExport>
                </div>
                <div>
                    <Button className="button" onClick={() => {
                        if (ref.current) {
                            ref.current.save();
                        }
                    }}>
                        Export PDF
                    </Button>
                </div>
                </div>
            
        );
    }
}

export default MyEditor;
