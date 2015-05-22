# sftp server

This App allows you to enable a SFTP server on your Rasberry Pi. If you are not running the application on xway OS you will need to change the following files:

1. Remove `root` from `/etc/ftpusers`
2. Replace the configuration file:
```      
# Example config file /etc/vsftpd.conf
#
# The default compiled in settings are fairly paranoid. This sample file
# loosens things up a bit, to make the ftp daemon more usable.
# Please see vsftpd.conf.5 for all compiled in defaults.
#
# READ THIS: This example file is NOT an exhaustive list of vsftpd options.
# Please read the vsftpd.conf.5 manual page to get a full idea of vsftpd's
# capabilities.
#
#
# Run standalone?  vsftpd can run either from an inetd or as a standalone
# daemon started from an initscript.
listen=YES
#
# Run standalone with IPv6?
# Like the listen parameter, except vsftpd will listen on an IPv6 socket
# instead of an IPv4 one. This parameter and the listen parameter are mutually
# exclusive.
#listen_ipv6=YES
#
# Allow anonymous FTP? (Beware - allowed by default if you comment this out).
anonymous_enable=NO
#
# Uncomment this to allow local users to log in.
local_enable=YES
#
# Uncomment this to enable any form of FTP write command.
write_enable=YES
#
# Default umask for local users is 077. You may wish to change this to 022,
# if your users expect that (022 is used by most other ftpd's)
local_umask=022
#
# Uncomment this to allow the anonymous FTP user to upload files. This only
# has an effect if the above global write enable is activated. Also, you will
# obviously need to create a directory writable by the FTP user.
#anon_upload_enable=YES
#
# Uncomment this if you want the anonymous FTP user to be able to create
# new directories.
#anon_mkdir_write_enable=YES
#
# Activate directory messages - messages given to remote users when they
# go into a certain directory.
dirmessage_enable=YES
#
# If enabled, vsftpd will display directory listings with the time
# in  your  local  time  zone.  The default is to display GMT. The
# times returned by the MDTM FTP command are also affected by this
# option.
use_localtime=YES
#
# Activate logging of uploads/downloads.
xferlog_enable=YES
#
# Make sure PORT transfer connections originate from port 20 (ftp-data).
connect_from_port_20=YES
#
# If you want, you can arrange for uploaded anonymous files to be owned by
# a different user. Note! Using "root" for uploaded files is not
# recommended!
#chown_uploads=YES
#chown_username=whoever
#
# You may override where the log file goes if you like. The default is shown
# below.
#xferlog_file=/var/log/vsftpd.log
#
# If you want, you can have your log file in standard ftpd xferlog format.
# Note that the default log file location is /var/log/xferlog in this case.
#xferlog_std_format=YES
#
# You may change the default value for timing out an idle session.
#idle_session_timeout=600
#
# You may change the default value for timing out a data connection.
#data_connection_timeout=120
#
# It is recommended that you define on your system a unique user which the
# ftp server can use as a totally isolated and unprivileged user.
#nopriv_user=ftpsecure
#
# Enable this and the server will recognise asynchronous ABOR requests. Not
# recommended for security (the code is non-trivial). Not enabling it,
# however, may confuse older FTP clients.
#async_abor_enable=YES
#
# By default the server will pretend to allow ASCII mode but in fact ignore
# the request. Turn on the below options to have the server actually do ASCII
# mangling on files when in ASCII mode.
# Beware that on some FTP servers, ASCII support allows a denial of service
# attack (DoS) via the command "SIZE /big/file" in ASCII mode. vsftpd
# predicted this attack and has always been safe, reporting the size of the
# raw file.
# ASCII mangling is a horrible feature of the protocol.
#ascii_upload_enable=YES
#ascii_download_enable=YES
#
# You may fully customise the login banner string:
#ftpd_banner=Welcome to blah FTP service.
#
# You may specify a file of disallowed anonymous e-mail addresses. Apparently
# useful for combatting certain DoS attacks.
#deny_email_enable=YES
# (default follows)
#banned_email_file=/etc/vsftpd.banned_emails
#
# You may restrict local users to their home directories.  See the FAQ for
# the possible risks in this before using chroot_local_user or
# chroot_list_enable below.
#chroot_local_user=YES
#
# You may specify an explicit list of local users to chroot() to their home
# directory. If chroot_local_user is YES, then this list becomes a list of
# users to NOT chroot().
# (Warning! chroot'ing can be very dangerous. If using chroot, make sure that
# the user does not have write access to the top level directory within the
# chroot)
#chroot_local_user=YES
#chroot_list_enable=YES
# (default follows)
#chroot_list_file=/etc/vsftpd.chroot_list
#
# You may activate the "-R" option to the builtin ls. This is disabled by
# default to avoid remote users being able to cause excessive I/O on large
# sites. However, some broken FTP clients such as "ncftp" and "mirror" assume
# the presence of the "-R" option, so there is a strong case for enabling it.
#ls_recurse_enable=YES
#
# Customization
#
# Some of vsftpd's settings don't fit the filesystem layout by
# default.
#
# This option should be the name of a directory which is empty.  Also, the
# directory should not be writable by the ftp user. This directory is used
# as a secure chroot() jail at times vsftpd does not require filesystem
# access.
secure_chroot_dir=/var/run/vsftpd/empty
#
# This string is the name of the PAM service vsftpd will use.
pam_service_name=vsftpd
#
# This option specifies the location of the RSA certificate to use for SSL
# encrypted connections.
rsa_cert_file=/etc/ssl/private/vsftpd.pem
#
local_root=/
```

##Editing Work with Sublime text as a SFTP Client

First at all, we need to install the <em>Package Control</em> for Sublime following <a href="https://packagecontrol.io/installation#st2">these</a> instructions.

Use the <em>Package Control: Install Package</em> command from the command palette. The command palette is opened via `ctrl+shift+p` on Windows and Linux, and `cmd+shift+p` on OS X.

Once you run it, type in 'SFTP' and press enter.
<p style="text-align: left;">Now, we are going to setup our server connection
<a href="http://docs.netbeast.co/wp-content/uploads/2015/04/Captura-de-pantalla-2015-04-13-a-las-17.23.02.png"><img class="  wp-image-150 aligncenter" src="http://docs.netbeast.co/wp-content/uploads/2015/04/Captura-de-pantalla-2015-04-13-a-las-17.23.02-300x169.png" alt="ftp setup" width="389" height="219" /></a></p>
SFTP is configured through a JSON file maintaining the following structure, we recommend this configuration for work with <em>xyos</em>:

<a href="http://docs.netbeast.co/wp-content/uploads/2015/04/Captura-de-pantalla-2015-04-13-a-las-18.50.48.png"><img class="  wp-image-155 aligncenter" src="http://docs.netbeast.co/wp-content/uploads/2015/04/Captura-de-pantalla-2015-04-13-a-las-18.50.48-291x300.png" alt="Captura de pantalla 2015-04-13 a las 18.50.48" width="316" height="326" /></a>

You are ready to keep working in a faster and more confortable way!
More documentation <a href="http://http://wbond.net/sublime_packages/sftp/usage">here</a>!


##Editing Connect to xway via FileZilla SFTP FTP client

We can download FileZilla from:

<a href="http://sourceforge.net/projects/filezilla/?source=typ_redirect">http://sourceforge.net/projects/filezilla/?source=typ_redirect</a>

Once you have the FileZilla client downloaded and activated on your computer, enter the domain name in the address field (you can also use the server's IP address). The username and password you need to type in are the same as the ones you use to log in to your cPanel. The FTP port is 21 and is filled in automatically.

In this case...
<pre class="prettyprint">domain name: home.xway (10.0.0.1)
username: pi (or root)
password: raspberry (or root)
</pre>
And press on "Quick connect" button.

Now, you have a fast and easy connection to the xway´s SFTP server. If you have any doubt about how FileZilla works, I let you all the documentation <a href="https://wiki.filezilla-project.org/Documentation">he</a><a href="https://wiki.filezilla-project.org/Documentation">re</a>.


##Editing Connect to xway via FTP using mac finder

<p>Connecting to xway's ftp server via finder is very easy:</p>
<p>Open a new finder window. Then, select the Go menu in the menu toolbar.</p>
<p>Select connect to server, note that you can directly access this option with cmd+k.</p>
<p>A window like this one will display:</p>
<img src="http://s22.postimg.org/b8xto6m0h/third.png"/>
<p>In "server direction" type ftp://10.0.0.1, 10.0.0.1 is the xways gateway IP direction in the netbeast-xy network.</p>

<p>The only thing left is to hit "Connect". You are ready to access all your xway's files!</p>

<p>Any doubt reach us at @netbeast_co (twitter) or staff [at] netbeast.co.</p>
