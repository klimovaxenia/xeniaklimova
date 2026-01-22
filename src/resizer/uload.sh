#!/bin/bash

S3_ROOT_DIR_800="xeniaklimova-library/public/p800-img"
S3_ROOT_DIR="xeniaklimova-library/public/pictures"
S3_ROOT_DIR_1200="xeniaklimova-library/public/p1200-img"
S3_ROOT_DIR_370="xeniaklimova-library/public/p370-img"

#aws s3 ls s3://xeniaklimova-library/public/p370-img/prj-gothia

#aws s3 cp ./p800-img/graphics "s3://${S3_ROOT_DIR}/graphics/"  --recursive
#aws s3 cp ./p800-img/sketches "s3://${S3_ROOT_DIR}/sketches/"  --recursive
#aws s3 cp ./p800-img/paintings-gouache "s3://${S3_ROOT_DIR}/paintings-gouache/"  --recursive
#aws s3 cp ./p800-img/paintings-watercolors "s3://${S3_ROOT_DIR}/paintings-watercolors/"  --recursive
#aws s3 cp ./p370-img/paintings-oils "s3://${S3_ROOT_DIR}/paintings-oils/"  --recursive

#aws s3 cp ./p800-img/prj-lobster "s3://${S3_ROOT_DIR_800}/prj-urban/"  --recursive
aws s3 cp ./p1200-img/prj-interior-97m-apartment "s3://${S3_ROOT_DIR_1200}/prj-interior-97m-apartment/"  --recursive
aws s3 cp ./p370-img/prj-interior-97m-apartment "s3://${S3_ROOT_DIR_370}/prj-interior-97m-apartment/"  --recursive
#aws s3 cp ./full-size-img/prj-gothia/gothia-view-from-water-2.png "s3://${S3_ROOT_DIR}/prj-gothia/" 
#aws s3 cp ./full-size-img/prj-gothia/gothia-view-from-water-3.png "s3://${S3_ROOT_DIR}/prj-gothia/" 
#aws s3 cp ./p1200-img/paintings-oils/p1200-crabs.png "s3://${S3_ROOT_DIR_1200}/paintings-oils/"
#aws s3 cp ./p1200-img/paintings-oils/p1200-les-tours-de-la-rochelle-1.png "s3://${S3_ROOT_DIR_1200}/paintings-oils/"
#aws s3 cp ./p1200-img/paintings-oils/p1200-lilsle-dabeau-1.png "s3://${S3_ROOT_DIR_1200}/paintings-oils/"
#aws s3 cp ./p800-img/paintings-oils/p800-crabs.png "s3://${S3_ROOT_DIR_800}/paintings-oils/"  
#aws s3 cp ./p800-img/paintings-oils/p800-les-tours-de-la-rochelle-1.png "s3://${S3_ROOT_DIR_800}/paintings-oils/"  
#aws s3 cp ./p800-img/paintings-oils/p800-lilsle-dabeau-1.png "s3://${S3_ROOT_DIR_800}/paintings-oils/"  
#aws s3 cp ./p370-img/paintings-oils/p370-crabs.png "s3://${S3_ROOT_DIR_370}/paintings-oils/"  
#aws s3 cp ./p370-img/paintings-oils/p370-les-tours-de-la-rochelle-1.png "s3://${S3_ROOT_DIR_370}/paintings-oils/"  
#aws s3 cp ./p370-img/paintings-oils/p370-lilsle-dabeau-1.png "s3://${S3_ROOT_DIR_370}/paintings-oils/"  
#aws s3 cp ./p370-img/prj-urban "s3://${S3_ROOT_DIR}/prj-urban/"  --recursive

#aws s3 cp ./p800-img/prj-birtvisi "s3://${S3_ROOT_DIR}/prj-birtvisi/"  --recursive
#aws s3 cp ./p800-img/prj-sculptures "s3://${S3_ROOT_DIR}/prj-sculptures/"  --recursive
#aws s3 cp ./p800-img/prj-likani "s3://${S3_ROOT_DIR}/prj-likani/"  --recursive
#aws s3 cp ./p800-img/prj-gtu-courtyard "s3://${S3_ROOT_DIR}/prj-gtu-courtyard/"  --recursive
#aws s3 cp ./p800-img/prj-interior-97m-apartment "s3://${S3_ROOT_DIR}/prj-interior-97m-apartment/"  --recursive
#aws s3 cp ./p800-img/prj-gentelmen-club "s3://${S3_ROOT_DIR}/prj-gentelmen-club/"  --recursive
#aws s3 cp ./p800-img/prj-jeger-house "s3://${S3_ROOT_DIR}/prj-jeger-house/"  --recursive
#aws s3 cp ./p800-img/prj-lobster "s3://${S3_ROOT_DIR}/prj-lobster/"  --recursive
#aws s3 cp ./p800-img/prj-park-bridge "s3://${S3_ROOT_DIR}/prj-park-bridge/"  --recursive
#aws s3 cp ./p800-img/prj-parthenon "s3://${S3_ROOT_DIR}/prj-parthenon/"  --recursive
#aws s3 cp ./p800-img/prj-rotunda "s3://${S3_ROOT_DIR}/prj-rotunda/"  --recursive
#aws s3 cp ./p800-img/prj-scale-model "s3://${S3_ROOT_DIR}/prj-scale-model/"  --recursive
#aws s3 cp ./p800-img/prj-space-model "s3://${S3_ROOT_DIR}/prj-space-model/"  --recursive
#aws s3 cp ./p800-img/prj-three-models "s3://${S3_ROOT_DIR}/prj-three-models/"  --recursive
#aws s3 cp ./p370-img/paintings-watercolors "s3://${S3_ROOT_DIR}/paintings-watercolors/"  --recursive
#aws s3 cp ./full-size-img/paintings-oils "s3://${S3_ROOT_DIR}/paintings-oils/"  --recursive
#aws s3 cp ./full-size-img/prj-micro-home "s3://${S3_ROOT_DIR}/prj-micro-home/"  --recursive


#aws s3 cp ./full-size-img/paintings-watercolors/yellow-tulips.jpg "s3://xeniaklimova-library/public/pictures/paintings-watercolors/"
#aws s3 cp ./p1200-img/paintings-watercolors/p1200-yellow-tulips.jpg "s3://xeniaklimova-library/public/p1200-img/paintings-watercolors/"
#aws s3 cp ./p800-img/paintings-watercolors/p800-yellow-tulips.jpg "s3://xeniaklimova-library/public/p800-img/paintings-watercolors/"
#aws s3 cp ./p370-img/paintings-watercolors/p370-yellow-tulips.jpg "s3://xeniaklimova-library/public/p370-img/paintings-watercolors/"
#
#aws s3 cp ./full-size-img/paintings-oils/2025-04-15-kirche.jpg "s3://xeniaklimova-library/public/pictures/paintings-oils/"
#aws s3 cp ./p1200-img/paintings-oils/p1200-watercolors-thumbnail.jpg "s3://xeniaklimova-library/public/p1200-img/paintings-oils/"
#aws s3 cp ./p800-img/paintings-oils/p800-watercolors-thumbnail.jpg "s3://xeniaklimova-library/public/p800-img/paintings-oils/"
#aws s3 cp ./p370-img/sketches/p370-sketches-thumbnail.jpg "s3://xeniaklimova-library/public/p370-img/sketches/"
