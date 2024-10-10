#!/bin/bash

#S3_ROOT_DIR="xeniaklimova-library/public/p800-img"

#SRC_DIR="full-size-img/graphics"
#TGT_DIR="p800-img/graphics"
#SRC_DIR="full-size-img/prj-interior-97m-apartment"
#TGT_DIR="p800-img/prj-interior-97m-apartment"
N=1
#for file in $SRC_DIR/*.jpg; do
for file in *.JPG; do
    ((N++))
    #find . -name "*.JPG" 
    #file -exec rename -v 'nissan-${N}.jpg';
    mv ${file} nissan-${N}.jpg;
    #echo ${file##*/}
    #FULL_SRC_PATH="${SRC_DIR}/${file##*/}"
    #FULL_TGT_PATH="${TGT_DIR}/p800-${file##*/}"
    #echo $FULL_SRC_PATH
    #echo $FULL_TGT_PATH
    #python resize800.py $FULL_SRC_PATH $FULL_TGT_PATH
done


