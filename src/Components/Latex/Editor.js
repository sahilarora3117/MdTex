import * as React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import SplitPane from "react-split-pane";
import 'katex/dist/katex.min.css';
import katex from 'katex';
import './markdown.css';
require("codemirror/mode/markdown/markdown");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/panda-syntax.css");
require("codemirror/theme/material.css");
require("./theme.css");
require("./darcula.css");
require("./index.css");



const DEFAULT_CSS_VALUE =
  '.cm-s-custom-0 {\r\n\tbackground: rgb(19, 19, 37);\r\n\tcolor: rgb(173, 170, 204);\r\n  font-weight: 300;\r\n\tline-height: 1.6;\r\n\tfont-family: "IBM Plex Mono", monospace;\r\n  letter-spacing: 0.425px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-cursor {\r\n\tborder-color: #fff;\r\n\toutline: 1px solid #fff;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-activeline-background {\r\n\tbackground: rgba(240, 240, 255, 0.8);\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-selected {\r\n\tbackground: rgba(55, 55, 77, 0.3);\r\n}\r\n\r\n.cm-s-custom-0 .cm-comment {\r\n\tfont-style: italic;\r\n\tcolor: #676b79;\r\n}\r\n\r\n.cm-s-custom-0 .cm-operator {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string {\r\n\tcolor: #c267f9;\r\n}\r\n\r\n.cm-s-custom-0 .cm-string-2 {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-tag {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-meta {\r\n\tcolor: #b084eb;\r\n}\r\n\r\n.cm-s-custom-0 .cm-number {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-atom {\r\n\tcolor: #ff2c6d;\r\n}\r\n\r\n.cm-s-custom-0 .cm-keyword {\r\n\tcolor: #b095e4;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable {\r\n\tcolor: #f73c91;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-2 {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-variable-3,\r\n.cm-s-custom-0 .cm-type {\r\n\tcolor: #ff9ac1;\r\n}\r\n\r\n.cm-s-custom-0 .cm-def {\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .cm-property {\r\n\tcolor: #f3f3f3;\r\n}\r\n\r\n.cm-s-custom-0 .cm-unit {\r\n\tcolor: #ffb86c;\r\n}\r\n\r\n.cm-s-custom-0 .cm-attribute {\r\n\tcolor: #d8baea;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-matchingbracket {\r\n\tborder-bottom: 1px dotted #19f9d8;\r\n\tpadding-bottom: 2px;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-gutters {\r\n  background: rgb(19, 19, 37);\r\n  border-right-color: rgb(19, 19, 37);\r\n  width: 40px;\r\n  margin-right: 9px;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-linenumber {\r\n  color: rgb(173, 170, 204);\r\n  opacity: 0.75;\r\n  background: rgb(19, 19, 37);\r\n  padding: 0 10px 0 4px;\r\n  font-size: 14px;\r\n  border-top: 2px solid transparent;\r\n}\r\n\r\n.cm-s-custom-0 .CodeMirror-lines .CodeMirror-code div {\r\n  padding-left: 2px;\r\n}';

const DEFAULT_JSX_OPTIONS = {
  theme: "custom-0",
  autoCloseBrackets: true,
  cursorScrollMargin: 48,
  mode: "markdown",
  lineNumbers: true,
  indentUnit: 2,
  tabSize: 2,
  styleActiveLine: true,
  viewportMargin: 99
};


export  default class Editor extends React.Component {
  state = {
    jsValue: this.props.tex || this.props.jsValue,
    cssValue: DEFAULT_CSS_VALUE || this.props.cssValue,
    inValue: ""
  };

  jsxOptions = {
    ...DEFAULT_JSX_OPTIONS,
    ...this.props.jsxOptions
  };



  onChange = which => (editor, data, value) => {
    this.setState({ [`${which}Value`]: value });
  };

  render() {
    return (
      <React.Fragment>
        <div className="topbar"> 

        </div>
        <SplitPane split="vertical" defaultSize="50%">
          <PureEditor
            name="js"
            style={{height: '100vh'}}
            value={this.state.jsValue}
            options={this.jsxOptions}
            onChange={this.onChange("js")}
          />
          <div id="capture">
          <div dangerouslySetInnerHTML={{__html: katex.renderToString(this.state.jsValue, {
            throwOnError: false
          })}} />
          </div>        
        </SplitPane>
        <Style css={this.state.cssValue} />
      </React.Fragment>
    );
  }
}

class PureEditor extends React.PureComponent {
  render() {
    return (
      <CodeMirror
        style={{height: '100vh'}}
        value={this.props.value}
        options={this.props.options}
        onBeforeChange={this.props.onChange}
      />
    );
  }
}

export const Style = props => {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: props.css
      }}
    />
  );
};
