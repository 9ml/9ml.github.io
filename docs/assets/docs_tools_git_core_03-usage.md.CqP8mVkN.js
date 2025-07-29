import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.ko2zIC2c.js";const r=JSON.parse('{"title":"Git 实际应用","description":"Git, Git使用教程, Git实际应用","frontmatter":{"title":"Git 实际应用","description":"Git, Git使用教程, Git实际应用"},"headers":[],"relativePath":"docs/tools/git/core/03-usage.md","filePath":"docs/tools/git/core/03-usage.md","lastUpdated":1753693356000}'),p={name:"docs/tools/git/core/03-usage.md"};function h(t,s,k,e,d,F){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="git-实际应用" tabindex="-1">Git 实际应用 <a class="header-anchor" href="#git-实际应用" aria-label="Permalink to &quot;Git 实际应用&quot;">​</a></h1><p>在实际应用中, <code>Git</code>的操作往往都不是一个命令能解决的, 通常需要好几个命令组合使用</p><h2 id="关联远程仓库" tabindex="-1">关联远程仓库 <a class="header-anchor" href="#关联远程仓库" aria-label="Permalink to &quot;关联远程仓库&quot;">​</a></h2><p>在<code>Github</code>上创建远程仓库后可以关联到本地</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化本地仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关联远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># name 是远程仓库的名称, 通常为 origin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例: git remote add origin git@github.com:xxx/xxx.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [name] [path]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看关联的仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remore</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆远程仓库到本地</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [path]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将别人仓库的地址改为自己的</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [your_path]</span></span></code></pre></div><h2 id="切换分支" tabindex="-1">切换分支 <a class="header-anchor" href="#切换分支" aria-label="Permalink to &quot;切换分支&quot;">​</a></h2><p>新建仓库默认生成了<code>master/main</code>分支</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看本地分支</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># * 代表当前所在的分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看本地和远程所有分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新建分支并切换</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [new_branch_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到已有分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 分支合并</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送分支</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 可以使用 git push -u origin master 将本地分支与远程分支关联</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 之后仅需要使用 git push 即可</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch_name]</span></span></code></pre></div><blockquote><p>本地内容有改动, 但是需要先拉取一下远程分支的内容</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 工作区修改暂存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 暂存修改恢复到工作区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pop</span></span></code></pre></div><h2 id="撤销操作" tabindex="-1">撤销操作 <a class="header-anchor" href="#撤销操作" aria-label="Permalink to &quot;撤销操作&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将暂存区文件恢复到工作区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [file_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将暂存区所有文件恢复到工作区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重置暂存区的某文件, 与上一次 commit 保持一致, 但工作区已更改的内容不变</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [file_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重置暂存区与工作区, 与上一次 commit 保持一致</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果是回退版本(commit), 将 file_name 改为 commit 的 hash 码即可</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [file_name]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 去掉某个 commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 实质是新建了一个与原来完全相反的 commit, 抵消了原来 commit 的效果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> revert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [commit_hash]</span></span></code></pre></div><blockquote><p><code>reset</code>回退错误恢复处理</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看最近操作记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 恢复到前五笔操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 再次拉取代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch_name]</span></span></code></pre></div><h2 id="版本回退与前进" tabindex="-1">版本回退与前进 <a class="header-anchor" href="#版本回退与前进" aria-label="Permalink to &quot;版本回退与前进&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看历史版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 若觉得这样的 log 不好看, 可以试试这个</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --graph</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --decorate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --abbrev-commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 检出到任意版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># hash 码很长, 通常 6-7 位即可</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a5d88ea</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用老版本覆盖远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 合并 commit</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将最近 4 个 commit 合并为 1 个</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 多人协作时不建议使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebase</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD~4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退到上一个版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退到上上个版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># HEAD^^ 可以换作具体版本 hash 值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^^</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 退到某一个版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># --hard代表丢弃工作区的修改, 让工作区与版本代码一模一样</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [hash]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退错了想要前进</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这个命令保留了最近执行的操作及所处的版本</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每条命令前的hash值, 则是对应版本的hash值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用上述的 git checkout 或者 git reset 命令 则可以检出或回退到对应版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reflog</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改最近一次的 commit 信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --amend</span></span></code></pre></div><h2 id="代码提交和同步" tabindex="-1">代码提交和同步 <a class="header-anchor" href="#代码提交和同步" aria-label="Permalink to &quot;代码提交和同步&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看有变更的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加当前目录的所有文件到暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交暂存区到本地仓库区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送到远程仓库</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 第一次需要关联上</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 之后再推送就不用指明应该推送的远程分支了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span></span></code></pre></div><blockquote><p>以<code>dev</code>分支为例, 需要先与<code>pro</code>分支的代码合并然后推送到<code>main</code>分支</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 当前在 dev 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看有变更的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加当前项目所有已更改的文件到暂存区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交暂存区到本地仓库区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [message]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 拉取别的分支代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pro</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果有冲突手动解决</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 标记冲突已解决</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 提交合并结果</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;merge pro&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到 main 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 确保 main 分支是最新的</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将 dev 分支合并到 main</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推送 main 分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><h2 id="代码撤销与撤销同步" tabindex="-1">代码撤销与撤销同步 <a class="header-anchor" href="#代码撤销与撤销同步" aria-label="Permalink to &quot;代码撤销与撤销同步&quot;">​</a></h2><p>撤销需要根据不同的状态执行不同的命令</p><h3 id="已修改但未暂存" tabindex="-1">已修改但未暂存 <a class="header-anchor" href="#已修改但未暂存" aria-label="Permalink to &quot;已修改但未暂存&quot;">​</a></h3><p>已修改过文件但未执行过任何<code>git</code>命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出所有的修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 列出某(几)个文件的修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销项目下所有的修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销当前文件夹下所有的修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销某几个文件的修改</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> x.js</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> y.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销新增的文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 撤销新增的文件和文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -df</span></span></code></pre></div><h3 id="已暂存但未提交" tabindex="-1">已暂存但未提交 <a class="header-anchor" href="#已暂存但未提交" aria-label="Permalink to &quot;已暂存但未提交&quot;">​</a></h3><p>已经执行过<code>git add</code>命令, 但未执行<code>git commit</code></p><blockquote><p>此时用<code>git diff</code>已经看不到任何修改, 因为<code>git diff</code>检查的是工作区与暂存区之间的差异</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 显示暂存区和本地仓库的差异</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --cached</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 暂存区的修改恢复到工作区</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回到已修改状态, 修改的内容仍然在工作区中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回到未修改状态, 清空暂存区和工作区</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 等价于 git reset 和 git checkout 两步操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span></span></code></pre></div><h3 id="已提交但未推送" tabindex="-1">已提交但未推送 <a class="header-anchor" href="#已提交但未推送" aria-label="Permalink to &quot;已提交但未推送&quot;">​</a></h3><p>已经执行过<code>git commit</code>命令, 但未执行<code>git push</code></p><blockquote><p>执行完<code>commit</code>之后, 会在仓库中生成一个版本号(<code>hash</code>值), 标志着此次提交, 之后任何时候, 都可以借助这个<code>hash</code>值回退到此次提交</p></blockquote><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 比较两个分支之间的差异</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [branch_name_A] [branch_name_B]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看本地仓库与本地远程仓库的差异</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diff</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将本地仓库回退到与远程仓库一致</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退到本地仓库上一个版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HEAD^</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退到任意版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --hard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [hash]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 回退且回到已修改状态, 修改仍保留在工作区中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --soft/git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reset</span></span></code></pre></div><h3 id="已推送" tabindex="-1">已推送 <a class="header-anchor" href="#已推送" aria-label="Permalink to &quot;已推送&quot;">​</a></h3><p>已经执行过<code>git push</code>命令</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 强制覆盖远程分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> orgin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果之前已经用 -u 关联过, 则可省略分支名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p><code>-f</code>参数表示强制覆盖, 一般情况下, 本地分支比远程要新, 所以可以直接推送到远程, 但有时推送到远程后发现有问题, 进行了版本回退, 旧版本或者分叉版本推送到远程, 需要添加<code>-f</code>参数, 表示强制覆盖</p></div>`,37)]))}const c=i(p,[["render",h]]);export{r as __pageData,c as default};
