var counterH = 0;
var counterV = 0;
var up = true;
var go = false;
var rightSide = true;
var goingRight = false;
var goingLeft = false;
var jumping = false;

var jumpCurve = [];
for (var i = 1; i < 120; i++) {
  jumpCurve.push( ( (((i * 5) - 300) * ((i * 5) - 300) * -1) / 600 + 150 ) );
}

// "a" := 97 "d" := 100 "space" = 32

function right() {
  // var set = ['<%= image_tag "marioRun1.png" %>', '<%= image_tag "marioRun2.png" %>', '<%= image_tag "marioRun3.png" %>', '<%= image_tag "marioRun2.png" %>']
  rightSide = true;
  goingRight = true;
  var set = ['assets/marioRunRight1.png', 'assets/marioRunRight2.png', 'assets/marioRunRight3.png', 'assets/marioRunRight2.png', "assets/marioStandRight.png"]
  var mario = document.getElementById("mario");
  var space = document.getElementById("space")
  setTimeout(function() {
    go = true;
    if (!jumping) {
      if (!go) {
        clearInterval(sprites);
        mario.src = set[4];
      } else {
        mario.src = set[0];
      }
    }
    setTimeout(function() {
      if (!jumping) {
        if (!go) {
          clearInterval(sprites);
          mario.src = set[4];
        } else {
          mario.src = set[1];
        }
      }
      setTimeout(function() {
        if (!jumping) {
          if (!go) {
            clearInterval(sprites);
            mario.src = set[4];
          } else {
            mario.src = set[2];
          }
        }
        setTimeout(function() {
          if (!jumping) {
            if (!go) {
              clearInterval(sprites);
              mario.src = set[4];
            } else {
              mario.src = set[3];
            }
          }
        }, 75);
      }, 75);
    }, 75);
  }, 0);
  var sprites = setInterval(function() {
    if (!jumping) {
      if (!go) {
        clearInterval(sprites);
        mario.src = set[4];
      }
    }
    setTimeout(function() {
      if (!jumping) {
        if (!go) {
          clearInterval(sprites);
          mario.src = set[4];
        } else {
          mario.src = set[0];
        }
      }
      setTimeout(function() {
        if (!jumping) {
          if (!go) {
            clearInterval(sprites);
            mario.src = set[4];
          } else {
            mario.src = set[1];
          }
        }
        setTimeout(function() {
          if (!jumping) {
            if (!go) {
              clearInterval(sprites);
              mario.src = set[4];
            } else {
              mario.src = set[2];
            }
          }
          setTimeout(function() {
            if (!jumping) {
              if (!go) {
                clearInterval(sprites);
                mario.src = set[4];
              } else {
                mario.src = set[3];
              }
            }
          }, 75);
        }, 75);
      }, 75);
    }, 0);
  }, 300);

  var moving = setInterval(function() {
    space.style.marginLeft = counterH + "px";
    counterH++;
    if (!go) {
      clearInterval(moving);
    }
  }, 5);

}

function left() {
  // var set = ['<%= image_tag "marioRun1.png" %>', '<%= image_tag "marioRun2.png" %>', '<%= image_tag "marioRun3.png" %>', '<%= image_tag "marioRun2.png" %>']
  rightSide = false;
  goingLeft = true;
  var set = ['assets/marioRunLeft1.png', 'assets/marioRunLeft2.png', 'assets/marioRunLeft3.png', 'assets/marioRunLeft2.png', '/assets/marioStandLeft.png']
  var mario = document.getElementById("mario");
  var space = document.getElementById("space")
  setTimeout(function() {
    go = true;
    if (!jumping) {
      if (!go) {
        clearInterval(sprites);
        mario.src = set[4];
      } else {
        mario.src = set[0];
      }
    }
    setTimeout(function() {
      if (!jumping) {
        if (!go) {
          clearInterval(sprites);
          mario.src = set[4];
        } else {
          mario.src = set[1];
        }
      }
      setTimeout(function() {
        if (!jumping) {
          if (!go) {
            clearInterval(sprites);
            mario.src = set[4];
          } else {
            mario.src = set[2];
          }
        }
        setTimeout(function() {
          if (!jumping) {
            if (!go) {
              clearInterval(sprites);
              mario.src = set[4];
            } else {
              mario.src = set[3];
            }
          }
        }, 75);
      }, 75);
    }, 75);
  }, 0);
  var sprites = setInterval(function() {
    if (!jumping) {
      if (!go) {
        clearInterval(sprites);
        mario.src = set[4];
      }
    }
    setTimeout(function() {
      if (!jumping) {
        if (!go) {
          clearInterval(sprites);
          mario.src = set[4];
        } else {
          mario.src = set[0];
        }
      }
      setTimeout(function() {
        if (!jumping) {
          if (!go) {
            clearInterval(sprites);
            mario.src = set[4];
          } else {
            mario.src = set[1];
          }
        }
        setTimeout(function() {
          if (!jumping) {
            if (!go) {
              clearInterval(sprites);
              mario.src = set[4];
            } else {
              mario.src = set[2];
            }
          }
          setTimeout(function() {
            if (!jumping) {
              if (!go) {
                clearInterval(sprites);
                mario.src = set[4];
              } else {
                mario.src = set[3];
              }
            }
          }, 75);
        }, 75);
      }, 75);
    }, 0);
  }, 300);

  var moving = setInterval(function() {
    if (counterH >= 0) {
      space.style.marginLeft = counterH + "px";
      counterH--;
      if (!go) {
        clearInterval(moving);
      }
    } else {
      counterH = 0;
    }
  }, 5);

}

function jump() {

  if (!jumping) {
    jumping = true;
    console.log(jumping);
    var jumpCount = 0;
    var space = document.getElementById("space");
    var mario = document.getElementById("mario");
    if (rightSide) {
      mario.src = "/assets/marioJumpRight.png";
    } else {
      mario.src = "/assets/marioJumpLeft.png";
    }


    var upDown = setInterval(function() {

      space.style.marginBottom = (jumpCurve[jumpCount]) + "px";
      space.style.marginTop = (331 - jumpCurve[jumpCount]) + "px";

      jumpCount++;
      if (jumpCount == jumpCurve.length) {
        if (rightSide) {
          mario.src = '/assets/marioStandRight.png';
        } else {
          mario.src = '/assets/marioStandLeft.png';
        }
        jumping = false;
        clearInterval(upDown);
      }

    }, 5);
  }

}

function stop() {
  go = false;
  if (jumping) {
    if (goingRight) {
      goingRight = false;
      document.getElementById("mario").src = "/assets/marioJumpRight.png";
    } else if (goingLeft) {
      goingLeft = false;
      document.getElementById("mario").src = "/assets/marioJumpLeft.png";
    }
  } else {
    if (goingRight) {
      goingRight = false;
      document.getElementById("mario").src = "/assets/marioStandRight.png";
    } else if (goingLeft) {
      goingLeft = false;
      document.getElementById("mario").src = "/assets/marioStandLeft.png";
    }
  }
}

// window.onKeyDown = function keyPressTest(e) {
//   document.getElementById("keyPress")
// }
// <- := 37  -> := 39 space := 32
$(document).keydown(function(e){
  if (e.keyCode==39) {
    right();
  } else if (e.keyCode==37) {
    left();
  } else if (e.keyCode==32) {
    jump();
  }
});

$(document).keyup(function(e){
  if (e.keyCode==39) {
    stop();
  } else if (e.keyCode==37) {
    stop();
  }
  // } else if (e.keyCode==32) {
  //   stop();
  // }
});

//extra

function jumpRight() {

  var jumpCount = 0;
  var space = document.getElementById("space");
  var mario = document.getElementById("mario");
  mario.src = "/assets/marioJumpRight.png";


  var upDown = setInterval(function() {

    space.style.marginBottom = (jumpCurve[jumpCount]) + "px";
    space.style.marginTop = (300 - jumpCurve[jumpCount]) + "px";

    jumpCount++;
    if (jumpCount == jumpCurve.length) {
      if (rightSide) {
        mario.src = '/assets/marioStandRight.png';
      } else {
        mario.src = '/assets/marioStandLeft.png';
      }
      clearInterval(upDown);
    }

    counterH += 1.8;
    space.style.marginLeft = counterH + "px";

  }, 5);

}

function jumpLeft() {

  var jumpCount = 0;
  var space = document.getElementById("space");
  var mario = document.getElementById("mario");
  mario.src = "/assets/marioJumpLeft.png";


  var upDown = setInterval(function() {

    space.style.marginBottom = (jumpCurve[jumpCount]) + "px";
    space.style.marginTop = (300 - jumpCurve[jumpCount]) + "px";

    jumpCount++;
    if (jumpCount == jumpCurve.length) {
      mario.src = '/assets/marioStandLeft.png';
      clearInterval(upDown);
    }

    counterH -= 1.8;
    space.style.marginLeft = counterH + "px";

  }, 5);

}

function jump2() {

  var jumpCount = 0;
  var space = document.getElementById("space");
  var mario = document.getElementById("mario");

  var upAndDown = setInterval(function() {
    if (up) {
      jumpCount++;
      space.style.marginTop = (150 - jumpCount) + "px";
      space.style.marginBottom = jumpCount + "px";
      if (jumpCount >= 100) {
        up = false;
      }
    } else {
      jumpCount--;
      space.style.marginTop = (150 - jumpCount) + "px";
      space.style.marginBottom = jumpCount + "px";
      if (jumpCount == 0) {
        if (rightSide) {
          mario.src = '/assets/marioStandRight.png';
        } else {
          mario.src = '/assets/marioStandLeft.png';
        }
        clearInterval(upAndDown);
        up = true;
      }
    }

  }, 5);
}