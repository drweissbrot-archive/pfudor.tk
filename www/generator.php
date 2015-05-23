<?php
    if(isset($_GET["generate"])) {
        /*    PREPARATIONS    */

        //Set defaults:

        //Set video ID
        if($_GET["vidtype"] == "ytplay") {
            $vid = $_GET["vidid"];
        } else {
            $vid = $_GET["vidtype"];
        }

        //Set start time
        if($_GET["startat"] == "") {
            $_GET["startat"] = 0;
        }

        //Set end time
        if($_GET["stopat"] == "") {
            $_GET["stopat"] = 0;
        }

        //Set volume
        if($_GET["volume"] == "") {
            $_GET["volume"] = "100";
        }

        //Set filter: sepia
        if($_GET["filter-sepia"] == "") {
            $_GET["filter-sepia"] = "0";
        }

        //Set filter: grayscale
        if($_GET["filter-grayscale"] == "") {
            $_GET["filter-grayscale"] = "0";
        }

        //Set filter: blur
        if($_GET["filter-blur"] == "") {
            $_GET["filter-blur"] = "0";
        }

        //Set control status
        if($_GET["controls"] == "on") {
            $controls = "1";
        } else {
            $controls = "0";
        }


        /*    GENERATE OUTPUT    */

        //Set link basis
        $link   = "https://pfudor.tk/?";

        //Set video type or idate
        $link  .= "v=" . $vid . "&";

        //Set start second
        $link  .= "s=" . $_GET["startat"] . "&";

        //Set end second
        $link  .= "e=" . $_GET["stopat"] . "&";

        //Set volume
        $link  .= "t=" . $_GET["volume"] . "&";

        //Set quality
        $link  .= "q=" . $_GET["quality"] . "&";

        //Set filter: sepia
        $link  .= "sepia=" . $_GET["filter-sepia"] . "&";

        //Set filter: grayscale
        $link  .= "gray=" . $_GET["filter-grayscale"] . "&";

        //Set filter: blur
        $link  .= "blur=" . $_GET["filter-blur"] . "&";

        //Set controls
        $link  .= "c=" . $controls;

        echo '<!DOCTYPE html><html><head><meta charset="utf-8" /><title>HAIL PFUDOR! &minus; Generator</title><link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto+Slab" /><link rel="stylesheet" href="gen.min.css" /></head><body>';
        echo '<strong>Yay!</strong> Your link was successfully generated: <a href="' . $link . '">' . $link . '</a>';
        echo '<br /><strong>Embed code:</strong> <code>&lt;iframe src="' . $link . ' width="1280" height="720"&gt;&lt;/iframe&gt;</code>';
        echo '<br /><br /><a onclick="window.close()" class="close">Close</a>';
        echo '</body></html>';
    } else {
        header("Location: https://pfudor.tk");
    }
