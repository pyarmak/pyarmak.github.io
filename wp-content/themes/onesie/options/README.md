## Welcome to the GPP Theme Options Framework.

To get started using the framework:

1. Add the GPP Theme Options Framework as a GIT submodule to your GIT repo'd theme. This makes it easy for you to stay updated with the latest version of the framework. Any time we update the module, you can run `git submodule update` and grab the latest stable version of the framework.

    ```
    $ cd theme_name
    $ git submodule add git://github.com/graphpaperpress/gpp-theme-options.git options
    ```
2. Copy theme-options-example.txt to theme-options.php
3. Bootstrap the framework by adding this to functions.php:

    ```php
    include_once(get_template_directory().'/options/options.php');
    ```
4. Bootstrap the theme options by adding this to functions.php below the include above:

    ```php
    include_once(get_template_directory().'/theme-options.php');
    ```
5. Customize theme-options.php. Options include:

    ```
    'type' => 'text' - standard text box
    'type' => 'textarea' - standard textarea
    'type' => 'select' - drop-down select
    'type' => 'checkbox' - checkbox
    'type' => 'color' - colorpicker
    'type' => 'image' - image uploader
    'type' => 'gallery' - gallery uploader
    'type' => 'css' - css textarea
    'type' => 'fonts' - Google font picker
    ```

To register theme options tabs, simply use `gpp_register_theme_options()` and `gpp_register_theme_options_tab()` within your existing code as shown in the above example. This makes it extremely easy to attach your theme options to specific functionality. That way if you have a lite version and a pro version of a theme, you can keep the theme options separated easily.

## Sortable ##

1. Keep all the sortable sections into one tab.
    ```
    // Tab holding the sorting sections
    $homepage_tab = array(
        "name" => "homepage_tab",
        "title" => __( "Homepage", "gpp" ),
        "sections" => $section_array
    );
    ```
2. Add one section a at the top of the sortable sections. This must be at the top hence, we have used '0' this section and rest of the section can start from '1'.
    ```
    $section_array = array(
            "homepage_section_0" => array(
                "name" => "homepage_section_0",
                "title" => __( "Sortable Sections", "gpp" ),
                "description" => ""
            )
        );
    ```
3. Add one hidden setting into this section, which holds the section order to be displayed. The name must be 'section_order'.
    ```
    'section_order' => array(
        "tab" => "homepage_tab",
        "name" => "section_order",
        "title" => __( "", "gpp" ),
        "description" => __( 'Add an optional link for the callout', "gpp" ),
        "section" => "homepage_section_0",
        "since" => "1.0",
        "id" => "homepage_section_0",
        "type" => "hidden",
        "default" => "1,2,3,4,5,6",
        "sanitize" => "html"
    )
    ```
4. Make sure that the sortable sections can be ordered according to the given order.
    ```
    // Default order
    $block_order = explode( ",", '1,2,3,4,5,6' );
    $block_array = array( '1'=>'Featured', '2'=>'Staggered', '3'=>'Portfolio', '4'=>'Clients', '5'=>'Team', '6'=>'Callout'  );

    // Order from the database
    $theme_options = get_option( gpp_get_current_theme_id() . "_options" );
    if ( ! empty( $theme_options['section_order'] ) ) {
        $block_order =  explode( ",", $theme_options['section_order'] );
    }

    // Order the sections according to the stored value
    foreach ( $block_order as $value ) {
        $section_array[ "homepage_section_" . ( $value ) ] = array(
                    "name" => "homepage_section_" . ( $value ),
                    "title" => $block_array[$value],
                    "description" => ""
                );
    }

    ```
5. Fornt-end, just get the 'section_order' value and order the output accordingly.

