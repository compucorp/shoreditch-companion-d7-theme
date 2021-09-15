# Shoreditch CiviAdmin Companion Drupal theme

An optional but advisable Drupal CiviCRM Administration theme meant as a
companion to the CiviCRM
[Shoreditch theme](https://github.com/civicrm/org.civicrm.shoreditch) to be used
for CiviCRM administration pages.

The main CiviCRM Shoreditch theme (available separately as a CiviCRM extension)
provides styles that adapt the CiviCRM look and feel within the CiviCRM
“container” only. This companion theme also styles some further elements of the
page (i.e. headers, breadcrumbs) with the purpose of better integrating visually
the outer elements of the page with the look and feel of Shoreditch.

**Without**
![without](images/without-companion-theme.png)

**With**
![with](images/with-companion-theme.png)

Note that this theme and Shoreditch are designed to theme the CiviCRM
administration pages only and not any public CiviCRM or website pages.

## Requirements

* The Drupal "Seven" theme must be installed and enabled

## Installation

1. Run the following commands

    ```bash
    # Enable the "CiviCRM Theme" module.
    drush en -y civicrmtheme

   # Add the package source.
   composer config repositories.custom/civicrm_shoreditch_companion vcs https://github.com/jensschuppe/civicrm_shoreditch_companion.git
   
    # Install the theme.
    composer require custom/civicrm_shoreditch_companion

    # Enable the theme, then set is as the CiviCRM admin theme.
    drush en -y civicrm_shoreditch_companion
    drush cset civicrmtheme.settings admin_theme civicrm_shoreditch_companion

    # Clear the cache.
    drush cr
    ```

2. Go to _admin/structure/block/list/civicrm_shoreditch_companion_
3. Keep the "Page title", "Messages" and "Main page content" blocks in the
    "Content" region, delete or disable any other block
