import React, { Component } from 'react';
import Form from "react-jsonschema-form";

const schema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            title: "File name",
            default: "Enter name of file"
        },
        company_name: {
            type: "string",
            title: "Company Name",
            default: "Company 1",
            enum: [
                "Company 1",
                "Company 2",
                "Company 3",
                "Company 4",
            ]
        },
        zendesk_url: {
            type: "string",
            title: "Zendesk URL",
            default: "Enter ticket url from znedesk",
            format: "uri"
        },
        original_file_from_customer: {
            type: "string",
            title: "Original File From Customer",
            default: "Paste entire contents of file here",
            format: "textarea"
        }
    }
};


class myForm extends Component {
    render() {
        return (
            <Form schema={schema}>
                <div>
                    <button className="btn btn-danger" >Help</button>
                    <button className="btn btn-success" >Save</button>
                </div>
                <div className="conver-this-oder">
                    <h5 >Convert this order</h5>
                </div>
            </Form>
        )
    }
}

export default myForm;
