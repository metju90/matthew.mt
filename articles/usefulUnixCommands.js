import "/components/codeBlock.js";

const title = "Useful unix commands";
const date = "November 24th, 2020";
const lastUpdate = "January 1st 2021";
const summary =
  "Useful unix commands which facilitates my work as full stack engineer";
const link = "/useful-unix-commands";

const content = /* html */ `
    <div>
        <p>As a full stack engineer I often need to execute certain Unix commands to complete a
        particular task. Over the years I’ve come across a list of very handy commands
        which facilitated my day-to-day work and I’ve decided to document and share these commands in my blog.
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
        <div>The running processes stdout will be printed</div>
        <code-block>
            <div>$ (cd /foo && npm start) <strong>&</strong> (cd /bar && npm start)</div>
        </code-block>
    </div>
`;

export { title, date, content, summary, link, lastUpdate };
