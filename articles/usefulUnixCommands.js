import "/components/codeBlock.js";

const title = "Useful unix commands";
const date = "November 24th, 2020";
const lastUpdate = "June 1th 2021";
const summary =
  "Useful unix commands which facilitates my work as full stack engineer";
const link = "/useful-unix-commands";

const content = /* html */ `
    <div>
        <p>As a fullstack engineer I often need to execute certain Unix commands to complete a
        particular task. Over the years, I’ve come across a list of handy commands that facilitated my day-to-day work, and I’ve decided to document and share these commands in my blog.
        Now, without further ado, let's see what these commands are 😊  
        </p>
    </div>

    <div style="margin-bottom:3rem">
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
    
    <div style="margin-bottom:3rem">
        <h2>#5 Find processes running on a given port and kill it</h2>
        <div>Useful when you have an app running in the background on a port which you would like to use.</div>
        <code-block>
            <div>$ <strong>lsof -i:</strong>4000</div>
            <div>COMMAND   PID           USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME</div>
            <div>node    21415 matthewbarbara   16u  IPv4 ...      0t0  TCP *:hbci (LISTEN)</div>
        </code-block>
        <div>This list you details of the process using port 4000. From this we need the process id, the PID. The following will kill the process and frees up the port </div> 
        <code-block>$ <strong>kill -9</strong> 21415</code-block>
        <div>If you want to be fancy you can combine the two:</div>
        <code-block>$ <strong>kill -9 $(lsof -i:4000 | tail -1 | awk '{print $2}')</strong></code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#6 Run two or more commands sequentially at one go</h2>
        <div>Useful for when you want to remove and reinstall dependecies before you start your app
        <code-block>
            <div>$ rm -rf node_modules/* <strong>&&</strong> npm i <strong>&&</strong> npm start</div>
        </code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#7 Run two or more commands in parallel</h2>
        <code-block>
            <div>$ (cd /foo && npm start) <strong>&</strong> (cd /bar && npm start)</div>
        </code-block>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#8 Less</h2>
        <h4>Options</h4>
         <div>
             <code>-N</code> to show line numbers.
        </div>
         <div>
             <code>-F</code> to read for new changes.
        </div>
        <h4>Navigation</h4>
        <div>
             <code>G</code> end of file.
        </div>
        <div>
             <code>g</code> beginning of file.
        </div>
        <div>
             <code>SPACE</code> forward one window.
        </div>
        <div>
             <code>b</code> back one window.
        </div>
        <h4>Search</h4>
        <div>
             <code>/</code> Search pattern in next occureance.
        </div>
        <div>
             <code>?</code> Search pattern in previous occureance.
        </div>
        <div>
             <code>n</code> search next match in forwrd.
        </div>
        <div>
             <code>N</code> search next match in backwards.
        </div>

        <h4>Others</h4>
        <div>
             <code>ma</code> mark the current position with the letter 'a'.
        </div>
        <div>
             <code>'a</code> go to the marked position 'a'.
        </div>
        <div>
             <code>&</code> display only the matching lines, not all.
        </div>
    </div>

    <div style="margin-bottom:3rem">
        <h2>#9 Remove from current and sub directories</h2>
        <div>If you have several projects, recursively removing <code>node_modules</code> is one effecting way to free up disk space</div>
        <code-block>
            <div>$ find . -name "node_modules" -type d -prune -exec rm -rf '{}' +</div>
        </code-block>
    </div>
`;

export { title, date, content, summary, link, lastUpdate };
