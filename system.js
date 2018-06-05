    /*function js for Download Page to know the operating system and add information to 'Download Options''s section in consequences*/
    if (window.navigator.platform.indexOf("Win32") != -1){
        document.getElementById("system1").innerHTML = '<i class="fa fa-windows"></i> Win 32-bit';
        document.getElementById("system1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip";
        document.getElementById("system2").innerHTML = '<i class="fa fa-windows"></i> Win 64-bit';
        document.getElementById("system2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip";
        document.getElementById("system3").innerHTML = '<i class="fa fa-apple"></i> OS X 64-bit';
        document.getElementById("system3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip";
        document.getElementById("system4").innerHTML = '<i class="fa fa-linux"></i> Linux 64-bit';
        document.getElementById("system4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip";
        document.getElementById("system5").innerHTML = '<i class="fa fa-linux"></i> Linux 32-bit';
        document.getElementById("system5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip";

        document.getElementById("md5-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.md5";
        document.getElementById("md5-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.md5";
        document.getElementById("md5-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.md5";
        document.getElementById("md5-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.md5";
        document.getElementById("md5-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.md5";
        document.getElementById("sha1-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.sha1";
        document.getElementById("sha1-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.sha1";
        document.getElementById("sha1-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.sha1";
        document.getElementById("sha1-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.sha1";
        document.getElementById("sha1-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.sha1";

    }
    else if (navigator.appVersion.indexOf("Win64")!=-1){
        document.getElementById("system1").innerHTML = '<i class="fa fa-windows"></i> Win 64-bit';
        document.getElementById("system1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip";
        document.getElementById("system2").innerHTML = '<i class="fa fa-windows"></i> Win 32-bit';
        document.getElementById("system2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip";
        document.getElementById("system3").innerHTML = '<i class="fa fa-apple"></i> OS X 64-bit';
        document.getElementById("system3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip";
        document.getElementById("system4").innerHTML = '<i class="fa fa-linux"></i> Linux 64-bit';
        document.getElementById("system4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip";
        document.getElementById("system5").innerHTML = '<i class="fa fa-linux"></i> Linux 32-bit';
        document.getElementById("system5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip";

        document.getElementById("md5-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.md5";
        document.getElementById("md5-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.md5";
        document.getElementById("md5-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.md5";
        document.getElementById("md5-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.md5";
        document.getElementById("md5-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.md5";
        document.getElementById("sha1-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.sha1";
        document.getElementById("sha1-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.sha1";
        document.getElementById("sha1-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.sha1";
        document.getElementById("sha1-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.sha1";
        document.getElementById("sha1-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.sha1";
    }

    else if (navigator.appVersion.indexOf("Linux x86_64")!=-1){
        document.getElementById("system1").innerHTML = '<i class="fa fa-linux"></i> Linux 64-bit';
        document.getElementById("system1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip";
        document.getElementById("system2").innerHTML = '<i class="fa fa-linux"></i> Linux 32-bit';
        document.getElementById("system2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip";
        document.getElementById("system3").innerHTML = '<i class="fa fa-apple"></i> OS X 64-bit';
        document.getElementById("system3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip";
        document.getElementById("system4").innerHTML = '<i class="fa fa-windows"></i> Win 64-bit';
        document.getElementById("system4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip";
        document.getElementById("system5").innerHTML = '<i class="fa fa-windows"></i> Win 32-bit';
        document.getElementById("system5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip";

        document.getElementById("md5-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.md5";
        document.getElementById("md5-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.md5";
        document.getElementById("md5-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.md5";
        document.getElementById("md5-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.md5";
        document.getElementById("md5-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.md5";
        document.getElementById("sha1-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.sha1";
        document.getElementById("sha1-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.sha1";
        document.getElementById("sha1-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.sha1";
        document.getElementById("sha1-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.sha1";
        document.getElementById("sha1-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.sha1";

    }
    else if (navigator.appVersion.indexOf("Linux i686")!=-1){
        document.getElementById("system1").innerHTML = '<i class="fa fa-linux"></i> Linux 32-bit';
        document.getElementById("system1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip";
        document.getElementById("system2").innerHTML = '<i class="fa fa-linux"></i> Linux 64-bit';
        document.getElementById("system2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip";
        document.getElementById("system3").innerHTML = '<i class="fa fa-apple"></i> OS X 64-bit';
        document.getElementById("system3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip";
        document.getElementById("system4").innerHTML = '<i class="fa fa-windows"></i> Win 64-bit';
        document.getElementById("system4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip";
        document.getElementById("system5").innerHTML = '<i class="fa fa-windows"></i> Win 32-bit';
        document.getElementById("system5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip";

        document.getElementById("md5-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.md5";
        document.getElementById("md5-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.md5";
        document.getElementById("md5-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.md5";
        document.getElementById("md5-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.md5";
        document.getElementById("md5-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.md5";
        document.getElementById("sha1-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.sha1";
        document.getElementById("sha1-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.sha1";
        document.getElementById("sha1-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.sha1";
        document.getElementById("sha1-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.sha1";
        document.getElementById("sha1-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.sha1";
    }
    else{
        document.getElementById("system1").innerHTML = '<i class="fa fa-apple"></i> OS X 64-bit';
        document.getElementById("system1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip";
        document.getElementById("system2").innerHTML = '<i class="fa fa-windows"></i> Win 64-bit';
        document.getElementById("system2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip";
        document.getElementById("system3").innerHTML = '<i class="fa fa-windows"></i> Win 32-bit';
        document.getElementById("system3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip";
        document.getElementById("system4").innerHTML = '<i class="fa fa-linux"></i> Linux 64-bit';
        document.getElementById("system4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip";
        document.getElementById("system5").innerHTML = '<i class="fa fa-linux"></i> Linux 32-bit';
        document.getElementById("system5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip";

        document.getElementById("md5-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.md5";
        document.getElementById("md5-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.md5";
        document.getElementById("md5-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.md5";
        document.getElementById("md5-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.md5";
        document.getElementById("md5-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.md5";
        document.getElementById("sha1-3").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86.zip.sha1";
        document.getElementById("sha1-2").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-win32.win32.x86_64.zip.sha1";
        document.getElementById("sha1-1").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-macosx.cocoa.x86_64.zip.sha1";
        document.getElementById("sha1-4").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86_64.zip.sha1";
        document.getElementById("sha1-5").href = "http://maven.sarl.io/io/sarl/io.sarl.lang.updatesite/0.7.2/io.sarl.lang.updatesite-0.7.2-linux.gtk.x86.zip.sha1";
    }


