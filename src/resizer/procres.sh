#!/bin/bash

#S3_ROOT_DIR="xeniaklimova-library/public/p1200-img"

#SRC_DIR="full-size-img/graphics"
#TGT_DIR="p800-img/graphics"
#a="paintings-watercolors"
#a="sketches"
#a="graphics"
#a="paintings-oils"
a="prj-likani"

SRC_DIR="full-size-img/${a}"
TGT_DIR370="p370-img/${a}"
TGT_DIR800="p800-img/${a}"
TGT_DIR1200="p1200-img/${a}"

#for file in $SRC_DIR/*.jpg; do
for file in $SRC_DIR/*.png; do
    #echo ${file##*/}
    FULL_SRC_PATH="${SRC_DIR}/${file##*/}"
    FULL_TGT_PATH370="${TGT_DIR370}/p370-${file##*/}"
    FULL_TGT_PATH800="${TGT_DIR800}/p800-${file##*/}"
    FULL_TGT_PATH1200="${TGT_DIR1200}/p1200-${file##*/}"
    #echo $FULL_SRC_PATH
    #echo $FULL_TGT_PATH
    python resize370.py $FULL_SRC_PATH $FULL_TGT_PATH370
    python resize800.py $FULL_SRC_PATH $FULL_TGT_PATH800
    python resize1200.py $FULL_SRC_PATH $FULL_TGT_PATH1200
    
done


