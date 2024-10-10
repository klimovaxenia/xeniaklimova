#!/bin/bash

S3_ROOT_DIR="xeniaklimova-library/public/p1200-img"

#SRC_DIR="full-size-img/graphics"
#TGT_DIR="p800-img/graphics"
SRC_DIR="full-size-img/paintings-watercolors"
TGT_DIR="p370-img/paintings-watercolors"

for file in $SRC_DIR/*.jpg; do
#for file in $SRC_DIR/*.png; do
    #echo ${file##*/}
    FULL_SRC_PATH="${SRC_DIR}/${file##*/}"
    FULL_TGT_PATH="${TGT_DIR}/p370-${file##*/}"
    #echo $FULL_SRC_PATH
    #echo $FULL_TGT_PATH
    python resize800.py $FULL_SRC_PATH $FULL_TGT_PATH
done


