import "/components/codeBlock.js";

const title = "Chrome Devtools";
const date = "August 14th, 2021";
const lastUpdate = "";
const summary = "Chrome Devtools feature hightlights and shortcuts";
const link = "/chrome-devtools";

const content = /* html */ `
    <div>
        <p>
            Chrome’s Devtool is a powerful and feature-rich piece of tool that facilities our work as software engineers.
            There are features that I use regularly and some other features that I rarely use.
            So rarely that by the time I need to reuse them the next time,
            I’d have forgotten what they are called despite knowing they will solve my problem.
            Thus, I’ve decided to list down all the cool features/shortcuts I use in Chrome’s Devtools as both a reference to myself and also to share with you :) 
        </p>
    </div>

    <div id="shortcuts" style="margin-bottom:3rem">
       <h2>#1 Switch back to your previous directory</h2>
       <div>Useful when you are working in a monorepo and often needs to switch back and forth to several directories</div>
       <code-block>
           <div>$ cd <strong>-</strong></div>
        </code-block>
        or go back to your <code>n</code> to last directory from your history
        <code-block>$ cd <strong>-2</strong></code-block>
        Note: the first command also works to checkout to your previous Git branch
        <code-block>$ git checkout <strong>-</strong></code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#2 Use the parameter of the last command</h2>
       <div>Has an many use cases. One common practical example is to create a directory and to change to it</div>
        <code-block>
            $ mkdir /home && cd <strong>$_</strong>
        </code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#3 Execute commands in a different directory</h2>
        <div>Useful when you do not want to change your current directory and need to execute commands in a different one</div>
        <code-block>$ <strong>(</strong>cd /home/some/other/dir && npm start<strong>)</strong></code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#4 Create a directory with subdirectories</h2>
        <code-block>$ <strong>mkdir -p</strong> /newDir/subDir</code-block>
    </div>
    
`;

export { title, date, content, summary, link, lastUpdate };
