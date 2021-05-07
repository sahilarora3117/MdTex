import React from 'react';
import {Table} from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import '../Markdown/markdown.css';

const MdHelp = () =>{
    return(
        <div>
            <h1><b>Markdown</b></h1>
            <h2>Headers</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td># H1</td>
                        <td><Markdown># H1</Markdown></td>
                    </tr>
                    <tr>
                        <td>## H2</td>
                        <td><Markdown>## H2</Markdown></td>
                    </tr>
                    <tr>
                        <td>### H3</td>
                        <td><Markdown>### H3</Markdown></td>
                    </tr>
                    <tr>
                        <td>#### H4</td>
                        <td><Markdown>#### H4</Markdown></td>
                    </tr>
                    <tr>
                        <td>##### H5</td>
                        <td><Markdown>##### H5</Markdown></td>
                    </tr>
                    <tr>
                        <td>###### H6</td>
                        <td><Markdown>###### H6</Markdown></td>
                    </tr>
                </tbody>
            </Table >
            <b>Alternatively, for H1 and H2, an underline-ish style:</b>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>Alt-H1<br/>=====</td>
                        <td><h1>Alt-H1</h1></td>
                    </tr>
                    
                    <tr>
                        <td>Alt-H2<br/>--------</td>
                        <td><h2>Alt-H2</h2></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Emphasis</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                <tr>
                    <td>Emphasis, aka italics, with *asterisks* or _underscores_.</td>
                    <td><Markdown>Emphasis, aka italics, with *asterisks* or _underscores_.</Markdown></td>
                </tr>
                <tr>
                    <td>Strong emphasis, aka bold, with **asterisks** or __underscores__.</td>
                    <td><Markdown>Strong emphasis, aka bold, with **asterisks** or __underscores__.</Markdown></td>
                </tr>
                <tr>
                    <td>Combined emphasis with **asterisks and _underscores_**.</td>
                    <td><Markdown>Combined emphasis with **asterisks and _underscores_**.</Markdown></td>
                </tr>
                <tr>
                    <td>Strikethrough uses two tildes. ~~Scratch this.~~</td>
                    <td><Markdown>Strikethrough uses two tildes. ~~Scratch this.~~</Markdown></td>
                </tr>
                </tbody>
            </Table>
            <h2>Lists</h2>
            <b>(In this example, leading and trailing spaces are shown with with dots: ⋅)</b>
            <Table striped bordered hover variant= "dark">
                <tbody>
                    <tr>
                        <td>⋅⋅* Unordered sub-list.</td>
                        <td><ul><li> Unordered sub-list. </li></ul></td>
                    </tr>
                    <tr>
                        <td>⋅⋅1. Ordered sub-list</td>
                        <td><ol><li> Ordered sub-list</li></ol></td>
                    </tr>
                    <tr>
                        <td>⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, 
                            and the leading spaces (at least one, 
                            but we'll use three here to also align the raw Markdown).</td>
                        <td><p> You can have properly indented paragraphs within list items. Notice the blank line above, 
                            and the leading spaces (at least one, 
                            but we'll use three here to also align the raw Markdown).</p></td>
                    </tr>
                    <tr>
                        <td>* Unordered list can use asterisks</td>
                        <td><Markdown>* Unordered list can use asterisks</Markdown></td>
                    </tr>
                    <tr>
                        <td>- Or minuses</td>
                        <td><Markdown>- Or minuses</Markdown></td>
                    </tr>
                    <tr>
                        <td>+ Or pluses</td>
                        <td><ul><li> Or pluses</li></ul></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Links</h2>
            <Table striped bordered hover variant= "dark">
                <tbody>
                    <tr>
                        <td>[I'm an inline-style link](https://www.google.com)</td>
                        <td><Markdown>[I'm an inline-style link](https://www.google.com)</Markdown></td>
                    </tr>
                    <tr>
                        <td>[I'm an inline-style link with title](https://www.google.com "Google's Homepage")</td>
                        <td><Markdown>[I'm an inline-style link with title](https://www.google.com "Google's Homepage")</Markdown></td>
                    </tr>
                    <tr>
                        <td>[I'm a relative reference to a repository file](../blob/master/LICENSE)</td>
                        <td><Markdown>[I'm a relative reference to a repository file](../blob/master/LICENSE)</Markdown></td>
                    </tr>
                    <tr>
                        <td>URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com</td>
                        <td><Markdown>URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com</Markdown></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Images</h2>
            <Table striped bordered hover variant ="dark">
                <tbody>
                    <tr>
                        <td>Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")</td>
                        <td><Markdown>Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")</Markdown></td>
                    </tr>
                    <tr>
                        <td>Reference-style: ![alt text][logo][logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"</td>
                        <td><Markdown>Reference-style: ![alt text][logo][logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"</Markdown></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Code and Syntax Highlighting</h2>
            <b>Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. 
                Which languages are supported and 
                how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); 
                to see the complete list, and how to write the language names.</b>
            <Table striped bordered variant="dark">
                <tbody>
                    <tr>
                        <td>Inline `code` has `back-ticks around` it.</td>
                        <td><Markdown>Inline `code` has `back-ticks around` it.</Markdown></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Tables</h2>
            <b>Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.</b>
            <Table bordered variant="dark">
                <tbody>
                    <tr>
                        <td><div><p>| Tables        | Are           | Cool  |</p>
                                <p>| ------------- |:-------------:| -----:|</p>
                                <p>| col 3 is      | right-aligned | $1600 |</p>
                                <p>| col 2 is      | centered      |   $12 |</p>
                                <p>| zebra stripes | are neat      |    $1 |</p>
                                </div></td>
                        <td>
                            <Table striped bordered variant="dark">
                                <thead>
                                    <tr>
                                        <th>Tables</th>
                                        <th>Are</th>
                                        <th >Cool</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>col 3 is</td>
                                        <td align="center">right-alinhed</td>
                                        <td align="right">$1600</td>
                                    </tr>
                                    <tr>
                                        <td>col 3 is</td>
                                        <td align="center">centered</td>
                                        <td align="right">$12</td>
                                    </tr>
                                    <tr>
                                        <td>zebra stripes are</td>
                                        <td align="center">neat</td>
                                        <td align="right">$1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <h2>Horizontal Rule</h2>
            <b>Three or more characters of (-, *, _) generates a new line</b>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>--- (Hyphens)</td>
                        <td><Markdown>---</Markdown></td>
                    </tr>
                    <tr>
                        <td>*** (Asterisks)</td>
                        <td><Markdown>****</Markdown></td>
                    </tr>
                    <tr>
                        <td>___ (underscores)</td>
                        <td><Markdown>____</Markdown></td>
                    </tr>
                </tbody>
            </Table>
            <h2>YouTube Videos</h2>
            <b>They can't be added directly but you can add an image with a link to the video like this:</b>
            <Table striped bordered variant="dark">
                <tbody>
                    <tr>
                        <td>&lt;a href="http://www.youtube.com/watch?feature=player_embedded&#38;v=YOUTUBE_VIDEO_ID_HERE
                            " target="_blank"&gt;&lt;img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
                            alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /&gt;&lt;/a&gt;</td>
                        <td>
                        <a href="http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ
                            " target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
                            alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <hr/>
            <h1><b>Katex</b></h1>
            <b>This is a list of TeX functions supported by KaTeX. It is sorted into logical groups.</b>
            <h2>Accents</h2>
            <Table striped bordered hover variant="dark" >
                <tbody>
                    <tr>
                        <td>a'</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("a'", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>a''</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("a''", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>a^&#123;\prime&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("a^{\\prime}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\acute&#123;a&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\acute{a}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\vec&#123;F&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\vec{F}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\overleftarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\overleftarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\underleftarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\underleftarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\overleftrightarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\overleftrightarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\underleftrightarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\underleftrightarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\overline&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\overline{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\underline&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\underline{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\overrightarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\overrightarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\overleftarrow&#123;AB&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\underrightarrow{AB}", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Delimiters</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>()</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("()", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>[]</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("[]", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\lbrace \rbrace</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\lbrace \\rbrace", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\langle \rangle</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\langle \\rangle", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\vert \rvert</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\vert \\rvert", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\lceil \rceil</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\lceil \\rceil", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\lt \gt</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\lt \\gt", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\uparrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\uparrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\downarrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\downarrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\updownarrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\updownarrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Uparrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Uparrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Downarrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Downarrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Updownarrow</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Updownarrow", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\backslash</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\backslash", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <b>Delimiter sizing</b>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>( \big( \Big( \bigg( \Bigg(</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("( \\big( \\Big( \\bigg( \\Bigg(", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\left(\LARGE&#123;AB&#125;\right)</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\left(\\LARGE{AB}\\right)", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Environments</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>\begin&#123;matrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;matrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{matrix} \n a & b \\\\ \n c & d \n \\end{matrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\begin&#123;pmatrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;pmatrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{pmatrix} \n a & b \\\\ \n c & d \n \\end{pmatrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\begin&#123;bmatrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;bmatrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{bmatrix} \n a & b \\\\ \n c & d \n \\end{bmatrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\begin&#123;vmatrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;vmatrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{vmatrix} \n a & b \\\\ \n c & d \n \\end{vmatrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\begin&#123;Bmatrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;Bmatrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{Bmatrix} \n a & b \\\\ \n c & d \n \\end{Bmatrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\begin&#123;Vmatrix&#125;<br/>
                                a &#38; b \\<br/>
                                c &#38; d<br/>
                                \end&#123;Vmatrix&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\begin{Vmatrix} \n a & b \\\\ \n c & d \n \\end{Vmatrix}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>x = \begin&#123;cases&#125;<br/>
                                a &#38;\text&#123;if &#125; b \\<br/>
                                c &#38;\text&#123;if &#125; d<br/>
                                \end&#123;cases&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("x = \\begin{cases} \n a &\\text{if } b \\\\ \n c &\\text{if } d \n \\end{cases}", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Letters and Unicode</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>\Alpha</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Alpha", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Beta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Beta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Gamma</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Gamma", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Delta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Delta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Epsilon</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Epsilon", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Zeta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Zeta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Theta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Theta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Kappa</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Kappa", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Lambda</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Lambda", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Pi</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Pi", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Sigma</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Sigma", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Omega</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Omega", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\Iota</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\Iota", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\alpha</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\alpha", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\beta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\beta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\gamma</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\gamma", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\delta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\delta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\epsilon</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\epsilon", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\zeta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\zeta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\theta</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\theta", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\kappa</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\kappa", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\lambda</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\lambda", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\pi</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\pi", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\sigma</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\sigma", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\omega</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\omega", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\iota</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\iota", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Layout</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>\overbrace&#123;a+b+c&#125;^&#123;\text&#123;note&#125;&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\overbrace{a+b+c}^{\\text{note}}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\underbrace&#123;a+b+c&#125;^&#123;\text&#123;note&#125;&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\underbrace{a+b+c}^{\\text{note}}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\not =</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\not =", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\cancel&#123;5&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\cancel{5}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\e^x</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("e^x", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\therefore</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\therefore", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\because</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\because", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\subset</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\subset", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\supset</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\supset", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\exists</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\exists", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\nexists</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\nexists", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Operators</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>\sum</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\sum", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\prod</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\prod", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\bigvee</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\bigvee", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\int</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\int", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\iint</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\iint", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\iiint</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\iiint", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\intop</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\intop", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\oint</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\oint", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\oiint</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\oiint", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\sqrt&#123;x&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\sqrt{x}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\sqrt[3]&#123;x&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\sqrt[3]{x}", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
            <h2>Fraction and Binomials</h2>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>\frac&#123;a&#125;&#123;b&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\frac{a}{b}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\cfrac&#123;a&#125;&#123;1 + \cfrac&#123;1&#125;&#123;b&#125;&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\cfrac{a}{1 + \\cfrac{1}{b}}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\binom&#123;n&#125;&#123;k&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\binom{n}{k}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>\dbinom&#123;n&#125;&#123;k&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("\\dbinom{n}{k}", {throwOnError: false})}} /></td>
                    </tr>
                    <tr>
                        <td>&#123;n\brack k&#125;</td>
                        <td><div dangerouslySetInnerHTML={{__html: katex.renderToString("{n\\brack k}", {throwOnError: false})}} /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default MdHelp;