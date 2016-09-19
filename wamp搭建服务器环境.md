## PHP-wamp配置本地服务器环境基本步骤

1. 首先安装好wamp软件。
2. 打开c盘，window\system32\drivers\etc,找到hosts文件。
3. 用vs code或sublime打开，不要用自带记事本打开(防止编码错误),把127.0.0.1写上想要设置的域名,格式如下：

    ```
    127.0.0.1       localhost
    127.0.0.1       xxx.xxxxxx.com
    ```
    
4. 修改wamp目录下的httpd-vhosts.conf文件，路径：wamp\bin\apache\apache2.4.9\conf\extra,修改内容如下：

    ```
    <VirtualHost *:80>
        DocumentRoot "d:\wamp\www\xxx\public"
        ServerName xxx.xxxxxx.com //此处与第3点中的域名一致
        <Directory "d:\wamp\www\xxx\public">
            Options Indexes FollowSymLinks Includes ExecCGI
            AllowOverride All
            Order allow,deny
            Allow from all
        </Directory>
    </VirtualHost>
    ```
    
5. 可以通过URL重写隐藏应用的入口文件index.php,下面是相关服务器的配置：
    - httpd.conf配置文件中加载了mod_rewrite.so模块(去掉前面的注释‘#’)
    - AllowOverride None 将None改为 All
    - 把下面的内容保存为.htaccess文件放到应用入口文件的同级目录下
    
        ```javascript
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteRule ^(.*)$ index.php?$1 [QSA,L]
        ```
        
6. 接下来就可以用浏览器打开自己定义的本地域名了。
