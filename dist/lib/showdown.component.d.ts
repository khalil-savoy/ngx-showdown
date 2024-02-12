import { ElementRef, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as Showdown from 'showdown';
import { ShowdownConfig } from './showdown-config.provider';
import { ShowdownConverter } from './showdown-converter.provider';
import * as i0 from "@angular/core";
export interface ShowdownComponent extends Showdown.ShowdownOptions {
}
/**
 * A angular component for render `Markdown` to `HTML`.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownComponent } from 'ngx-showdown';
 *
 * @NgModule({
 *   declarations: [ ShowdownComponent ];
 * })
 * export class AppModule {}
 * ```
 *
 * Bind markdown value and options object
 * ```typescript
 * import { Component } from '@angular/core';
 * import * as Showdown from 'showdown';
 *
 * @Component({
 *   selector: 'some',
 *   template: '<showdown [value]="text" [options]="options"></showdown>'
 * })
 * export class SomeComponent {
 *   text: string = `
 *     # Some header
 *     ---
 *     **Some bold**
 *   `;
 *   options: Showdown.ShowdownOptions = { smartIndentationFix: true };
 *   // ...
 * }
 * ```
 * Bind single option (it have properties for all showdown options).
 * ```html
 * <showdown emoji="true"  noHeaderId># Some text :+1:</showdown>
 * ```
 *
 * Set static markdown value.
 * ```html
 * <showdown value="___Some static value___" underline></showdown>
 * ```
 *
 * Use as directive on anther element.
 * ```html
 * <div showdown="# Div Element" headerLevelStart="2"></div>
 * ```
 *
 * Static markdown value in the element content.
 * ```html
 * <div>
 *    <showdown smartIndentationFix>
 *       # List:
 *       * a
 *            * A
 *       * b
 *    </showdown>
 * </div>
 * ```
 *
 * Set template reference variable.
 * ```html
 * <showdown #sd></showdown>
 * ```
 * Or
 * ```html
 * <div showdown #sd="showdown"></div>
 * ```
 */
export declare class ShowdownComponent extends ShowdownConverter implements OnInit, OnChanges, Showdown.ShowdownOptions {
    private _elementRef;
    private _domSanitizer?;
    /**
     * The input markdown value.
     *
     * __Example :__
     *
     * Set some static markdown value.
     * ```html
     * <showdown value="**Some bold value**"></showdown>
     * ```
     *
     * Bind property with markdown value.
     * ```html
     * <textarea [(ngModel)]="text"></textarea>
     * <showdown [value]="text"></showdown>
     * ```
     */
    value: string;
    /**
     * Input alias to `value`.
     *
     * __Example :__
     *
     * ```html
     * <div [showdown]="# Some Header"></div>
     * ```
     *
     * Equivalent to
     * ```html
     * <showdown [value]="# Some Header"></showdown>
     * ```
     */
    set showdown(value: string);
    /**
     * The showdown options of the converter.
     *
     * __Example :__
     *
     * Bind options
     * ```typescript
     * import { Component } from '@angular/core';
     * import * as Showdown from 'showdown';
     *
     * @Component({
     *   selector: `some`,
     *   template: `<showdown [options]="options"># Some Header<showdown>`
     * })
     * export class SomeComponent {
     *   options: Showdown.ShowdownOptions = {headerLevelStart: 3};
     *   // ...
     * }
     * ```
     * Or
     * ```html
     * <showdown [options]="{smartIndentationFix: true}"> # Indentation Fix<showdown>
     * ```
     */
    get options(): Showdown.ShowdownOptions;
    set options(options: Showdown.ShowdownOptions);
    private _sanitize;
    /**
     * Enables html sanitize, it will sanitize the converter html output by [`DomSanitizer`](https://angular.io/api/platform-browser/DomSanitizer#sanitize).
     *
     * __Example :__
     *
     * ```typescript
     * import { Component } from '@angular/core';
     *
     * @Component({
     *   selector: 'some',
     *   styles: [`.box { width: 95%; padding: 5px; border: 1px solid black;}`],
     *   template: `
     *     <h3>Input</h3>
     *     <textarea class="box" [(ngModel)]="text"></textarea>
     *     <input type="checkbox" [(ngModel)]="sanitize"/> <b>Sanitize</b>
     *     <h3>Markdown</h3>
     *     <pre class="box"><code>{{ text }}</code></pre>
     *     <h3>Preview</h3>
     *     <div class="box">
     *       <showdown #sd [value]="text" [sanitize]="sanitize"></showdown>
     *     </div>
     *   `;
     * })
     * export class SomeComponent {
     *    text: string = `# A cool link
     * <a href="javascript:alert('Hello!')">click me</a>`;
     * }
     * ```
     */
    set sanitize(sanitize: boolean);
    constructor(_elementRef: ElementRef, _domSanitizer?: DomSanitizer, config?: ShowdownConfig);
    /**
     * A angular lifecycle method, Use on init to check if it `content` type and load the element `content` to `value`.
     * @internal
     */
    ngOnInit(): void;
    /**
     * A angular lifecycle method, Use to call to render method after changes.
     * @internal
     */
    ngOnChanges(): void;
    /**
     * Convert the markdown value of {@link ShowdownComponent#value} to html and set the html result to the element content.
     *
     * __Example :__
     *
     * ```html
     * <textarea #textarea (change)="showdown.render(textarea.value)"/># Some Header</textarea>
     * <showdown #showdown></showdown>
     * ```
     * @param value - A markdown value to render (it will override the current value of `ShowdownComponent#value`)
     */
    render(value?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowdownComponent, [null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShowdownComponent, "showdown,[showdown]", ["showdown"], { "backslashEscapesHTMLTags": { "alias": "backslashEscapesHTMLTags"; "required": false; }; "completeHTMLDocument": { "alias": "completeHTMLDocument"; "required": false; }; "disableForced4SpacesIndentedSublists": { "alias": "disableForced4SpacesIndentedSublists"; "required": false; }; "emoji": { "alias": "emoji"; "required": false; }; "encodeEmails": { "alias": "encodeEmails"; "required": false; }; "ghCodeBlocks": { "alias": "ghCodeBlocks"; "required": false; }; "ghCompatibleHeaderId": { "alias": "ghCompatibleHeaderId"; "required": false; }; "ghMentions": { "alias": "ghMentions"; "required": false; }; "ghMentionsLink": { "alias": "ghMentionsLink"; "required": false; }; "headerLevelStart": { "alias": "headerLevelStart"; "required": false; }; "literalMidWordAsterisks": { "alias": "literalMidWordAsterisks"; "required": false; }; "literalMidWordUnderscores": { "alias": "literalMidWordUnderscores"; "required": false; }; "metadata": { "alias": "metadata"; "required": false; }; "noHeaderId": { "alias": "noHeaderId"; "required": false; }; "omitExtraWLInCodeBlocks": { "alias": "omitExtraWLInCodeBlocks"; "required": false; }; "openLinksInNewWindow": { "alias": "openLinksInNewWindow"; "required": false; }; "parseImgDimensions": { "alias": "parseImgDimensions"; "required": false; }; "prefixHeaderId": { "alias": "prefixHeaderId"; "required": false; }; "rawHeaderId": { "alias": "rawHeaderId"; "required": false; }; "rawPrefixHeaderId": { "alias": "rawPrefixHeaderId"; "required": false; }; "requireSpaceBeforeHeadingText": { "alias": "requireSpaceBeforeHeadingText"; "required": false; }; "simpleLineBreaks": { "alias": "simpleLineBreaks"; "required": false; }; "simplifiedAutoLink": { "alias": "simplifiedAutoLink"; "required": false; }; "smartIndentationFix": { "alias": "smartIndentationFix"; "required": false; }; "smoothLivePreview": { "alias": "smoothLivePreview"; "required": false; }; "splitAdjacentBlockquotes": { "alias": "splitAdjacentBlockquotes"; "required": false; }; "strikethrough": { "alias": "strikethrough"; "required": false; }; "tables": { "alias": "tables"; "required": false; }; "tablesHeaderId": { "alias": "tablesHeaderId"; "required": false; }; "tasklists": { "alias": "tasklists"; "required": false; }; "underline": { "alias": "underline"; "required": false; }; "value": { "alias": "value"; "required": false; }; "showdown": { "alias": "showdown"; "required": false; }; "options": { "alias": "options"; "required": false; }; "sanitize": { "alias": "sanitize"; "required": false; }; }, {}, never, ["*"], false, never>;
}
