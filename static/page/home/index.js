window.onload=function(){

    urlinfo = window.location.href;  //获取当前页面的url
    console.log(urlinfo)
    len = urlinfo.split("?");//获取url的长度
    newsidinfo = len[1];//取出参数字符串 这里会获得类似“id=1”这样的字符串
    console.log(newsidinfo);
    newsids = newsidinfo.split("&");//对获得的参数字符串按照“=”进行分割
    parameter1 = newsids[0];  //得到参数值 os：标识安卓还是ios，1=ios、2=安卓
    os = parameter1.split("=")[1];
    parameter2 = newsids[1];   //1=普通屏幕、2=iPhone X、3=iPhone XR、4=iPhoneX Max
    dim = parameter2.split("=")[1];
    parameter3 = newsids[2];  //version：广告页版本，1=第一种版本、2=第二种版本，每个版本显示的图片都是不一样的
    version = parameter3.split("=")[1];
    console.log("获取到的参数值是" + os, dim, version);
    if (version == 1) {
        document.getElementById("bootPage").style.display = "none";
        var viewHeight = document.documentElement.clientHeight;
        var advertise = document.querySelector('.advertise');
        advertise.style.height = viewHeight + 'px';
        if (dim == 1) {
            document.getElementById("advertiseTwo").style.display = "none";
            document.getElementById("advertiseThree").style.display = "none";
            document.getElementById("advertiseFour").style.display = "none";
        } else if (dim == 2) {
            document.getElementById("advertiseOne").style.display = "none";
            document.getElementById("advertiseThree").style.display = "none";
            document.getElementById("advertiseFour").style.display = "none";
        } else if (dim == 3) {
            document.getElementById("advertiseOne").style.display = "none";
            document.getElementById("advertiseTwo").style.display = "none";
            document.getElementById("advertiseFour").style.display = "none";
        } else if (dim == 4) {
            document.getElementById("advertiseOne").style.display = "none";
            document.getElementById("advertiseThree").style.display = "none";
            document.getElementById("advertiseTwo").style.display = "none";
        }

        var skip = document.getElementsByClassName("skip");
        console.log(skip)
        for (i = 0; i < skip.length; i++) {
            console.log(skip[i])
            if (skip[i].nodeType === 1) {
                if(dim==1){
                    skip[i].classList.add("skip1")
                }
                skip[i].onclick = function () {
                    console.log("与原生交互进入软件")
                    if (os == 1) {                   //ios
                        document.location = "aserboss*startMainPage";
                    }
                    else if (os == 2) {              //安卓
                        aserboss.startMainPage();
                    }
                    // startMainPage();
                }
            }
        }
        setTimeout(() => {
            console.log("与原生交互进入软件")
            if (os == 1) {                   //ios
                document.location = "aserboss*startMainPage";
            }
            else if (os == 2) {              //安卓
                aserboss.startMainPage();
            }
            // startMainPage();
            //满足条件清除定时器
            clearInterval()
        }, 5000);
    } else if (version == 2) {
        document.getElementById("advertisementPage").style.display = "none";
        var entry = document.getElementsByClassName("entry");
        // console.log(entry)
        for (i = 0; i < entry.length; i++) {
            // console.log(entry[i])
            if (entry[i].nodeType === 1) {
                entry[i].onclick = function () {
                    console.log("与原生交互进入软件")
                    if (os == 1) {                   //ios
                        document.location = "aserboss*startMainPage";
                    }
                    else if (os == 2) {              //安卓
                        aserboss.startMainPage();
                    }
                    // startMainPage();
                }
            }
        }
    }

    if (dim == 1) {
        document.getElementById("wrapTwo").style.display = "none";
        document.getElementById("wrapThree").style.display = "none";
        document.getElementById("wrapFour").style.display = "none";
        var aLi = document.querySelectorAll(".boxOne li");
        var boxOne = document.querySelector('.boxOne');
        var wrap = document.querySelector('.wrapOne');
        // var aLiWidth = boxOne.offsetWidth;
        var viewHeight = document.documentElement.clientHeight;
        var viewWidth = document.documentElement.clientWidth;
        console.log('屏幕高度', viewHeight)
        console.log('屏幕宽度', viewWidth)
        var aLiWidth = viewWidth;
        console.log('aLiWidth: ' + aLiWidth)
        wrap.style.height = viewHeight + 'px';
        // 设置盒子的宽度
        boxOne.style.width = aLi.length * 100 + '%';
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.width = 1 / aLi.length * 100 + '%';
        };
        // 初始化手指坐标点
        var startPoint = 0;
        var startEle = 0;
        var disX = 0;
        //手指按下
        wrap.addEventListener("touchstart", function (e) {
            startPoint = e.changedTouches[0].pageX;
            // console.log(startPoint);
            startEle = boxOne.offsetLeft;
            // console.log(startEle)
        });
        //手指滑动
        wrap.addEventListener("touchmove", function (e) {
            var currPoint = e.changedTouches[0].pageX;
            disX = currPoint - startPoint;
            if (Math.abs(disX) > 30 && Math.abs(disX) < 150) {
                // console.log('滑动距离', Math.abs(disX), disX)
                if (disX > 0) {
                    disX = disX + 150
                } else if (disX < 0) {
                    disX = disX - 150
                }
                var left = startEle + disX;
                // console.log(left)
                boxOne.style.left = left + 'px';

            }
        });
        //当手指抬起的时候，判断图片滚动离左右的距离，当
        wrap.addEventListener("touchend", function (e) {
            var left = boxOne.offsetLeft;
            // 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
            var currNum = Math.round(-left / aLiWidth);
            currNum = currNum >= (aLi.length - 1) ? aLi.length - 1 : currNum;
            currNum = currNum <= 0 ? 0 : currNum;
            boxOne.style.left = -currNum * wrap.offsetWidth + 'px';
        })

    } else if (dim == 2) {
        var entry = document.getElementsByClassName("entry");
        // console.log(entry)
        for (i = 0; i < entry.length; i++) {
            // console.log(entry[i])
            if (entry[i].nodeType === 1) {
                entry[i].style.top = 85 + '%';
            }
        }

        document.getElementById("wrapOne").style.display = "none";
        document.getElementById("wrapThree").style.display = "none";
        document.getElementById("wrapFour").style.display = "none";
        var aLi = document.querySelectorAll(".boxTwo li");
        var boxTwo = document.querySelector('.boxTwo');
        var wrap = document.querySelector('.wrapTwo');
        // var aLiWidth = boxTwo.offsetWidth;
        var viewHeight = document.documentElement.clientHeight;
        var viewWidth = document.documentElement.clientWidth;
        console.log('屏幕高度', viewHeight)
        console.log('屏幕宽度', viewWidth)
        var aLiWidth = viewWidth;
        console.log('aLiWidth: ' + aLiWidth)
        wrap.style.height = viewHeight + 'px';
        // 设置盒子的宽度
        boxTwo.style.width = aLi.length * 100 + '%';
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.width = 1 / aLi.length * 100 + '%';
        };
        // 初始化手指坐标点
        var startPoint = 0;
        var startEle = 0;
        //手指按下
        wrap.addEventListener("touchstart", function (e) {
            startPoint = e.changedTouches[0].pageX;
            startEle = boxTwo.offsetLeft;
        });
        //手指滑动
        wrap.addEventListener("touchmove", function (e) {
            var currPoint = e.changedTouches[0].pageX;
            var disX = currPoint - startPoint;
            if (Math.abs(disX) > 30 && Math.abs(disX) < 150) {
                // console.log('滑动距离', Math.abs(disX), disX)
                if (disX > 0) {
                    disX = disX + 150
                } else if (disX < 0) {
                    disX = disX - 150
                }
                var left = startEle + disX;
                // console.log(left)
                boxTwo.style.left = left + 'px';
            }
        });
        //当手指抬起的时候，判断图片滚动离左右的距离，当
        wrap.addEventListener("touchend", function (e) {
            var left = boxTwo.offsetLeft;
            // console.log(left)
            // 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
            var currNum = Math.round(-left / aLiWidth);
            // console.log(currNum)
            currNum = currNum >= (aLi.length - 1) ? aLi.length - 1 : currNum;
            currNum = currNum <= 0 ? 0 : currNum;
            boxTwo.style.left = -currNum * wrap.offsetWidth + 'px';
        })

    } else if (dim == 3) {
        var entry = document.getElementsByClassName("entry");
        // console.log(entry)
        for (i = 0; i < entry.length; i++) {
            // console.log(entry[i])
            if (entry[i].nodeType === 1) {
                entry[i].style.top = 86 + '%';
            }
        }
        document.getElementById("wrapOne").style.display = "none";
        document.getElementById("wrapTwo").style.display = "none";
        document.getElementById("wrapFour").style.display = "none";
        var aLi = document.querySelectorAll(".boxThree li");
        var boxThree = document.querySelector('.boxThree');
        var wrap = document.querySelector('.wrapThree');
        var viewHeight = document.documentElement.clientHeight;
        var viewWidth = document.documentElement.clientWidth;
        console.log('屏幕高度', viewHeight)
        console.log('屏幕宽度', viewWidth)
        // var aLiWidth = boxThree.offsetWidth;
        var aLiWidth = viewWidth;
        console.log('aLiWidth: ' + aLiWidth)
        wrap.style.height = viewHeight + 'px';
        // 设置盒子的宽度
        boxThree.style.width = aLi.length * 100 + '%';
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.width = 1 / aLi.length * 100 + '%';
        };
        // 初始化手指坐标点
        var startPoint = 0;
        var startEle = 0;
        //手指按下
        wrap.addEventListener("touchstart", function (e) {
            startPoint = e.changedTouches[0].pageX;
            startEle = boxThree.offsetLeft;
        });
        //手指滑动
        wrap.addEventListener("touchmove", function (e) {
            var currPoint = e.changedTouches[0].pageX;
            var disX = currPoint - startPoint;
            if (Math.abs(disX) > 30 && Math.abs(disX) < 150) {
                console.log('滑动距离', Math.abs(disX), disX)
                if (disX > 0) {
                    disX = disX + 150
                } else if (disX < 0) {
                    disX = disX - 150
                }
                var left = startEle + disX;
                console.log(left)
                boxThree.style.left = left + 'px';
            }
        });
        //当手指抬起的时候，判断图片滚动离左右的距离，当
        wrap.addEventListener("touchend", function (e) {
            var left = boxThree.offsetLeft;
            // console.log(left)
            // 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
            var currNum = Math.round(-left / aLiWidth);
            // console.log(currNum)
            currNum = currNum >= (aLi.length - 1) ? aLi.length - 1 : currNum;
            currNum = currNum <= 0 ? 0 : currNum;
            boxThree.style.left = -currNum * wrap.offsetWidth + 'px';
        })

    } else if (dim == 4) {
        var entry = document.getElementsByClassName("entry");
        // console.log(entry)
        for (i = 0; i < entry.length; i++) {
            // console.log(entry[i])
            if (entry[i].nodeType === 1) {
                entry[i].style.top = 88 + '%';
            }
        }
        document.getElementById("wrapOne").style.display = "none";
        document.getElementById("wrapTwo").style.display = "none";
        document.getElementById("wrapThree").style.display = "none";
        var aLi = document.querySelectorAll(".boxFour li");
        var boxFour = document.querySelector('.boxFour');
        var wrap = document.querySelector('.wrapFour');
        // var aLiWidth = boxFour.offsetWidth;
        var viewHeight = document.documentElement.clientHeight;
        var viewWidth = document.documentElement.clientWidth;
        console.log('屏幕高度', viewHeight)
        console.log('屏幕宽度', viewWidth)
        var aLiWidth = viewWidth;
        console.log('aLiWidth: ' + aLiWidth)
        wrap.style.height = viewHeight + 'px';
        // 设置盒子的宽度
        boxFour.style.width = aLi.length * 100 + '%';
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].style.width = 1 / aLi.length * 100 + '%';
        };
        // 初始化手指坐标点
        var startPoint = 0;
        var startEle = 0;
        //手指按下
        wrap.addEventListener("touchstart", function (e) {
            startPoint = e.changedTouches[0].pageX;
            startEle = boxFour.offsetLeft;
        });
        //手指滑动
        wrap.addEventListener("touchmove", function (e) {
            var currPoint = e.changedTouches[0].pageX;
            var disX = currPoint - startPoint;
            if (Math.abs(disX) > 30 && Math.abs(disX) < 200) {
                // console.log('滑动距离', Math.abs(disX), disX)
                if (disX > 0) {
                    disX = disX + 200
                } else if (disX < 0) {
                    disX = disX - 200
                }
                var left = startEle + disX;
                // console.log(left)
                boxFour.style.left = left + 'px';
            }

        });
        //当手指抬起的时候，判断图片滚动离左右的距离，当
        wrap.addEventListener("touchend", function (e) {
            var left = boxFour.offsetLeft;
            // 判断正在滚动的图片距离左右图片的远近，以及是否为最后一张或者第一张
            var currNum = Math.round(-left / aLiWidth);
            currNum = currNum >= (aLi.length - 1) ? aLi.length - 1 : currNum;
            currNum = currNum <= 0 ? 0 : currNum;
            boxFour.style.left = -currNum * wrap.offsetWidth + 'px';
        })

    }
    // if (viewHeight > 800 && viewWidth > 700) {
    //     var entry = document.getElementsByClassName("entry");
    //     // console.log(entry)
    //     for (i = 0; i < entry.length; i++) {
    //         console.log(entry[i])
    //         if (entry[i].nodeType === 1) {
    //             entry[i].style.top = 88.5 + '%';
    //         }
    //     }
    // }
    if (viewWidth > 700) {
        var imgPath = document.getElementsByClassName("imgPath");
        var entry = document.getElementsByClassName("entry");
        for (i = 0; i < imgPath.length; i++) {
            if (imgPath[i].nodeType === 1) {
                imgPath[i].style.height = 100 + '%';
                imgPath[i].style.width = 'auto';
            }
        }
    }


};