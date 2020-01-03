<!DOCTYPE html>
<html lang="{$CurrentLocale.Key}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    {asset name="Head"}
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i" rel="stylesheet">
</head>

{assign
"linkFormat"
"<div class='Navigation-linkContainer'>
        <a href='%url' class='Navigation-link %class'>
            %text
        </a>
    </div>"
}

{capture name="menu"}
    {if $User.SignedIn}
        <div class="Navigation-row NewDiscussion">
            <div class="NewDiscussion mobile">
                {module name="NewDiscussionModule" reorder=$DataDrivenTitleBar}
            </div>
        </div>
    {else}
        {if !$DataDrivenTitleBar}
            <div class="Navigation-row">
                <div class="SignIn mobile">
                    {module name="MeModule"}
                </div>
            </div>
        {/if}
    {/if}
    
    {if !$DataDrivenTitleBar}
        {categories_link format=$linkFormat}
        {discussions_link format=$linkFormat}
        {knowledge_link format=$linkFormat}
        {custom_menu format=$linkFormat}
        {activity_link format=$linkFormat}
        
    {/if}
{/capture}

{assign var="SectionGroups" value=(isset($Groups) || isset($Group))}
{assign var="TemplateCss" value="
    {if $User.SignedIn}
        UserLoggedIn
    {else}
        UserLoggedOut
    {/if}

    {if inSection('Discussion') and $Page gt 1}
        isNotFirstPage
    {/if}

    {if inSection('Group') && !isset($Group.Icon)}
        noGroupIcon
    {/if}

    locale-{$CurrentLocale.Lang}
"}
<body id="{$BodyID}" class="{$BodyClass}{$TemplateCss|strip:" "}">

    <!--[if lt IE 9]>
      <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div class="Frame" id="page">
        <div class="Frame-top">
            {if $DataDrivenTitleBar}
                <header id="titleBar" data-react="title-bar-hamburger" style="display: none!important;" data-unhide="true">
                    {$smarty.capture.menu}
                </header>
            {else}
                <div class="Frame-header">
                    <header id="MainHeader" class="Header">
                        <div class="Container">
                            <div class="row">
                                <div class="Hamburger">
                                    <button class="Hamburger Hamburger-menuXcross" id="menu-button" aria-label="toggle menu">
                                        <span class="Hamburger-menuLines" aria-hidden="true"/>
                                        <span class="Hamburger-visuallyHidden sr-only">
                                            {t c="toggle menu"}
                                        </span>
                                    </button>
                                </div>
                                <a href="{home_link format="%url"}" class="Header-logo">
                                    {logo}
                                </a>
                                <a href="{home_link format="%url"}" class="Header-logo mobile">
                                    {mobile_logo}
                                </a>
                                <nav class="Header-desktopNav">
                                    {categories_link format=$linkFormat}
                                    {discussions_link format=$linkFormat}
                                    {custom_menu format=$linkFormat}
                                </nav>
                                <div class="Header-flexSpacer"></div>
                                <div class="Header-right">
                                    {community_chooser buttonType='titleBarLink' buttonClass='Header-desktopCommunityChooser'}
                                    <div class="MeBox-header">
                                        {module name="MeModule" CssClass="FlyoutRight"}
                                    </div>
                                    {if $User.SignedIn}
                                        <button class="mobileMeBox-button">
                                            <span class="Photo PhotoWrap">
                                                <img src="{$User.Photo|escape:'html'}" class="ProfilePhotoSmall" alt="{t c='Avatar'}">
                                            </span>
                                        </button>
                                    {/if}
                                </div>
                            </div>
                        </div>
                        <nav class="Navigation needsInitialization js-nav">
                            <div class="Container">
                                {$smarty.capture.menu}
                                <div class='Navigation-linkContainer'>
                                    {community_chooser buttonType='reset' fullWidth=true buttonClass='Navigation-link'}
                                </div>
                            </div>
                        </nav>
                        <nav class="mobileMebox js-mobileMebox needsInitialization">
                            <div class="Container">
                                {module name="MeModule"}
                                <button class="mobileMebox-buttonClose Close">
                                    <span>×</span>
                                </button>
                            </div>
                        </nav>
                    </header>
                </div>
            {/if}
            {*            if we have $heroImageUrl it means it has been set in themehooks, so the plugin is enabled*}
            {if {banner_image_url}}
                {if inSection("DiscussionList") || inSection("CategoryList")}
                    <div class="MyHero Herobanner-bgImage" style="background-image: url('{banner_image_url}')">
{*                        <h1>{$Title}</h1>*}
{*                        <p>{$Description}</p>*}
                        {if $hasAdvancedSearch}
                            <div class="BannerSearchBox AdvancedSearch">
                                {module name="AdvancedSearchModule"}
                            </div>
                        {else}
                            <div class="BannerSearchBox">
                                {searchbox}
                            </div>
                        {/if}
                    </div>
                    <div class="bannerImgReplacer" >
                        <div class="Container">
                            <h1>{$Title}</h1>
                            <p>{$Description}</p>
                        </div>
                    </div>
                {/if}
            {else}
                {if $Category}
                    <h2 class="H HomepageTitle">{$Category.Name}{follow_button}</h2>
                    <p class="P PageDescription">{$Category.Description}</p>
                {else}
                    {if {homepage_title} !== ""}
                        <div class="Container">
                            <h2 class="H HomepageTitle ">{homepage_title}</h2>
                        </div>
                    {else}
                        <div class="Container">
                            <h2 class="H HomepageTitle ">{$Title}</h2>
                        </div>
                    {/if}
                    {if $_Description}
                        <p class="P PageDescription">{$_Description}</p>
                    {else}
                        <p class="P PageDescription">{$Description}</p>
                    {/if}
                {/if}
            {/if}
            <div class="Frame-body">
                <div class="Frame-content">
                    <div class="Container">
                        <div class="Frame-contentWrap">
                            <div class="Frame-details">
                                {if !$isHomepage}
                                    <div class="Frame-row">
                                        <nav class="BreadcrumbsBox">
                                            {breadcrumbs}
                                        </nav>
                                    </div>
                                {/if}
                                {if !$DataDrivenTitleBar}
                                    <div class="Frame-row SearchBoxMobile">
                                        {if !$SectionGroups && !inSection(["SearchResults"])}
                                            <div class="SearchBox js-sphinxAutoComplete" role="search">
                                                {if $hasAdvancedSearch === true}
                                                    {module name="AdvancedSearchModule"}
                                                {else}
                                                    {searchbox}
                                                {/if}
                                            </div>
                                        {/if}
                                    </div>
                                {/if}
                                <div class="Frame-row">
                                    {if $isHomepage}
                                        <main class="Content MainContent PannelHidden">
                                            {if inSection("Profile")}
                                                <div class="Profile-header">
                                                    <div class="Profile-photo">
                                                        <div class="PhotoLarge">
                                                            {module name="UserPhotoModule"}
                                                        </div>
                                                    </div>
                                                    <div class="Profile-name">
                                                        <h1 class="Profile-username">
                                                            {$Profile.Name|escape:'html'}
                                                        </h1>
                                                        {if isset($Rank)}
                                                            <span class="Profile-rank">{$Rank.Label|escape:'html'}</span>
                                                        {/if}
                                                    </div>
                                                </div>
                                            {/if}
                                            {asset name="Content"}
                                        </main>
                                    {else}
                                    <main class="Content MainContent">
                                        {if inSection("Profile")}
                                            <div class="Profile-header">
                                                <div class="Profile-photo">
                                                    <div class="PhotoLarge">
                                                        {module name="UserPhotoModule"}
                                                    </div>
                                                </div>
                                                <div class="Profile-name">
                                                    <h1 class="Profile-username">
                                                        {$Profile.Name|escape:'html'}
                                                    </h1>
                                                    {if isset($Rank)}
                                                        <span class="Profile-rank">{$Rank.Label|escape:'html'}</span>
                                                    {/if}
                                                </div>
                                            </div>
                                        {/if}
                                        {asset name="Content"}
                                    </main>
                                    {/if}

                                        <aside class="Panel Panel-main">
                                            {if !$SectionGroups && !$DataDrivenTitleBar}
                                                <div class="SearchBox js-sphinxAutoComplete" role="search">
                                                    {searchbox}
                                                </div>
                                            {/if}
                                            {asset name="Panel"}
                                        </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Frame-footer">
            {include file="partials/footer.tpl"}
        </div>
    </div>
    <div id="modals"></div>
    {event name="AfterBody"}
</body>

</html>
