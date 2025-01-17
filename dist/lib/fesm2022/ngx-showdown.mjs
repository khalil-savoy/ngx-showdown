import * as i0 from '@angular/core';
import { Injectable, Optional, SecurityContext, Component, Input, EventEmitter, Directive, Output, Pipe, NgModule } from '@angular/core';
import * as Showdown from 'showdown';
import * as i1 from '@angular/platform-browser';
import * as i2 from '@angular/common/http';

/**
 * @internal
 */
let { hasOwnProperty: hasOwnProperty$1 } = {};
/**
 * A config provider
 *
 * ### Example
 *
 * Set custom config provider.
 * ```typescript
 * import { NgModel } from '@angular/core';
 * import { ShowdownModule, ShowdownConfig } from 'ngx-showdown';
 *
 * export class MyShowdownConfig extends ShowdownConfig {
 *   emoji = true;
 *   underscore = false;
 *   flavor = 'github';
 * }
 *
 * @NgModel({
 *   imports: [ ShowdownModule ],
 *   providers: [ {provide: ShowdownConfig, useClass: MyConverterOptions} ]
 * })
 * export class AppModule {}
 * ```
 */
class ShowdownConfig {
    /**
     * @see https://github.com/showdownjs/showdown/blob/master/README.md#flavors
     */
    flavor;
    constructor(options) {
        this.merge(options);
    }
    /**
     * Merge options
     *
     * @param options - A options object to merge.
     */
    merge(options) {
        for (let key in options) {
            if (hasOwnProperty$1.call(options, key)) {
                this[key] = options[key];
            }
        }
    }
}

/**
 * @internal
 */
let { hasOwnProperty } = {};
/**
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @NgModule({
 *   providers: [ ShowdownConverter ];
 * })
 * export class AppModule {}
 * ```
 *
 * Use the converter instance.
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @Injectable()
 * export class SomeService {
 *   constructor(showdownConverter: ShowdownConverter) {
 *     let markdown: string = "**Some**";
 *     let html: string = showdownConverter.makeHtml(markdown);
 *     console.log(`some:\nmarkdown: ${markdown)\nhtml: ${html}\n`);
 *   }
 * }
 * ```
 */
class ShowdownConverter extends Showdown.Converter {
    constructor(config) {
        super(config && { extensions: config.extensions });
        this.setFlavor((config && config.flavor) || 'vanilla');
        this.setOptions(config);
    }
    /**
     * Set options to the converter.
     *
     * @param options - A options object to set.
     */
    setOptions(options) {
        for (let key in options) {
            if (hasOwnProperty.call(options, key)) {
                this.setOption(key, options[key]);
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter, deps: [{ token: ShowdownConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownConverter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: ShowdownConfig, decorators: [{
                    type: Optional
                }] }]; } });

/**
 * @internal
 */
const MAP_OPTION = {
    '': true,
    true: true,
    false: false
};
/**
 * @internal
 */
let _toOption = (value) => MAP_OPTION.hasOwnProperty(value) ? MAP_OPTION[value] : value;
/**
 * The options keys for the dynamic properties set.
 * @internal
 */
const OPTIONS_PROPERTIES_KEYS = [
    'backslashEscapesHTMLTags',
    'completeHTMLDocument',
    'disableForced4SpacesIndentedSublists',
    'emoji',
    'encodeEmails',
    'ghCodeBlocks',
    'ghCompatibleHeaderId',
    'ghMentions',
    'ghMentionsLink',
    'headerLevelStart',
    'literalMidWordAsterisks',
    'literalMidWordUnderscores',
    'metadata',
    'noHeaderId',
    'omitExtraWLInCodeBlocks',
    'openLinksInNewWindow',
    'parseImgDimensions',
    'prefixHeaderId',
    'rawHeaderId',
    'rawPrefixHeaderId',
    'requireSpaceBeforeHeadingText',
    'simpleLineBreaks',
    'simplifiedAutoLink',
    'smartIndentationFix',
    'smoothLivePreview',
    'splitAdjacentBlockquotes',
    'strikethrough',
    'tables',
    'tablesHeaderId',
    'tasklists',
    'underline'
];
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
class ShowdownComponent extends ShowdownConverter {
    _elementRef;
    _domSanitizer;
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
    value;
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
    set showdown(value) {
        this.value = value;
    }
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
    get options() {
        return this.getOptions();
    }
    set options(options) {
        this.setOptions(options);
    }
    _sanitize;
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
    set sanitize(sanitize) {
        this._sanitize = _toOption(sanitize);
    }
    constructor(_elementRef, _domSanitizer, config) {
        super(config);
        this._elementRef = _elementRef;
        this._domSanitizer = _domSanitizer;
    }
    /**
     * A angular lifecycle method, Use on init to check if it `content` type and load the element `content` to `value`.
     * @internal
     */
    ngOnInit() {
        if (this.value === undefined && this._elementRef.nativeElement.innerHTML.trim() !== '') {
            this.render(this._elementRef.nativeElement.innerHTML);
        }
    }
    /**
     * A angular lifecycle method, Use to call to render method after changes.
     * @internal
     */
    ngOnChanges() {
        this.render();
    }
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
    render(value) {
        if (typeof value === 'string') {
            this.value = value;
        }
        if (typeof this.value === 'string') {
            let result = this.makeHtml(this.value);
            if (this._sanitize) {
                result = this._domSanitizer.sanitize(SecurityContext.HTML, result);
            }
            this._elementRef.nativeElement.innerHTML = result;
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownComponent, deps: [{ token: i0.ElementRef }, { token: i1.DomSanitizer, optional: true }, { token: ShowdownConfig, optional: true }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.2", type: ShowdownComponent, selector: "showdown,[showdown]", inputs: { backslashEscapesHTMLTags: "backslashEscapesHTMLTags", completeHTMLDocument: "completeHTMLDocument", disableForced4SpacesIndentedSublists: "disableForced4SpacesIndentedSublists", emoji: "emoji", encodeEmails: "encodeEmails", ghCodeBlocks: "ghCodeBlocks", ghCompatibleHeaderId: "ghCompatibleHeaderId", ghMentions: "ghMentions", ghMentionsLink: "ghMentionsLink", headerLevelStart: "headerLevelStart", literalMidWordAsterisks: "literalMidWordAsterisks", literalMidWordUnderscores: "literalMidWordUnderscores", metadata: "metadata", noHeaderId: "noHeaderId", omitExtraWLInCodeBlocks: "omitExtraWLInCodeBlocks", openLinksInNewWindow: "openLinksInNewWindow", parseImgDimensions: "parseImgDimensions", prefixHeaderId: "prefixHeaderId", rawHeaderId: "rawHeaderId", rawPrefixHeaderId: "rawPrefixHeaderId", requireSpaceBeforeHeadingText: "requireSpaceBeforeHeadingText", simpleLineBreaks: "simpleLineBreaks", simplifiedAutoLink: "simplifiedAutoLink", smartIndentationFix: "smartIndentationFix", smoothLivePreview: "smoothLivePreview", splitAdjacentBlockquotes: "splitAdjacentBlockquotes", strikethrough: "strikethrough", tables: "tables", tablesHeaderId: "tablesHeaderId", tasklists: "tasklists", underline: "underline", value: "value", showdown: "showdown", options: "options", sanitize: "sanitize" }, exportAs: ["showdown"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: '<ng-content></ng-content>', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'showdown,[showdown]',
                    template: '<ng-content></ng-content>',
                    exportAs: 'showdown',
                    inputs: OPTIONS_PROPERTIES_KEYS
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.DomSanitizer, decorators: [{
                    type: Optional
                }] }, { type: ShowdownConfig, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { value: [{
                type: Input
            }], showdown: [{
                type: Input
            }], options: [{
                type: Input
            }], sanitize: [{
                type: Input
            }] } });
// Define options properties setter for angular directive and direct access
for (let key of OPTIONS_PROPERTIES_KEYS) {
    Object.defineProperty(ShowdownComponent.prototype, key, {
        set(value) {
            this.setOption(key, _toOption(value));
        },
        configurable: true
    });
}

/**
 * A angular directive to `ShowdownComponent` for make http request of markdown content.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { HttpClientModule } from '@angular/common/http';
 * import { ShowdownComponent, SourceDirective } from 'ngx-showdown';
 *
 * @NgModule({
 *    declarations: [ ShowdownComponent, SourceDirective ],
 *    imports: [ HttpClientModule ]
 * })
 * export class AppModule {}
 * ```
 *
 * Bind url `src` directive
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *     selector: 'some',
 *     template: '<showdown [src]="url" smartIndentationFix>**Loading...**</showdown>
 * })
 * class SomeComponent {
 *     url: string = 'https://unpkg.com/ngx-showdown/README.md';
 *     // ...
 * }
 * ```
 *
 * Set static url
 * ```html
 * <showdown src="README.md" [options]="{noHeaderId: true}"></showdown>
 * ```
 *
 * Set template reference variable
 * ```html
 * <showdown #source="source" src="README.md"></showdown>
 * ```
 *
 * Listening to `error` events.
 * ```html
 * <showdown #sd src="http://url.error" (error)="sd.render('# '+$event.message)"></showdown>
 * ```
 */
class SourceDirective {
    _showdownComponent;
    _http;
    /**
     * The source url of the markdown content.
     *
     * __Example :__
     *
     * Set static url to `src` directive.
     * ```html
     * <showdown src="https://unpkg.com/ngx-showdown/README.md"></showdown>
     * ```
     *
     * Bind url to `src` directive.
     * ```html
     * <input type="text" #url placeholder="url" />
     * <button (click)="src = url.value">Load</button>
     * <showdown [src]="src">**Loading...**</showdown>
     * ```
     */
    src;
    /**
     * On error occur.
     *
     * __Example :__
     *
     * ```html
     * <input type="text" placeholder="url" [(ngModel)]="url"/>
     * <showdown [src]="url" (error)="sd.render('# Error\n> '+$event.message)">**Loading...**</showdown>
     * ```
     */
    error = new EventEmitter();
    constructor(_showdownComponent, _http) {
        this._showdownComponent = _showdownComponent;
        this._http = _http;
    }
    /**
     * A angular lifecycle method, Use to call to `load` method on src init/changes
     * @internal
     */
    ngOnChanges() {
        this.load();
    }
    /**
     * Load the markdown content of {@link SourceDirective#src} url to {@link ShowdownComponent#value}.
     *
     * __Example :__
     *
     * ```html
     * <input type="text" #url value="source.src" placeholder="Url" />
     * <button (click)="source.load(url.value)">Load</button>
     * <showdown #source="source" src="https://unpkg.com/ngx-showdown/README.md"></showdown>
     * ```
     * @param url - A url of markdown content to load (it will override the current url of `SourceDirective#src`)
     */
    load(url) {
        if (url) {
            this.src = url;
        }
        if (this.src) {
            this
                ._http
                .get(this.src, { responseType: 'text' })
                .subscribe((response) => {
                this._showdownComponent.render(response);
            }, (error) => {
                this.error.emit(error);
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SourceDirective, deps: [{ token: ShowdownComponent }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SourceDirective, selector: "showdown[src],[showdown][src]", inputs: { src: "src" }, outputs: { error: "error" }, exportAs: ["source"], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SourceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'showdown[src],[showdown][src]',
                    exportAs: 'source'
                }]
        }], ctorParameters: function () { return [{ type: ShowdownComponent }, { type: i2.HttpClient }]; }, propDecorators: { src: [{
                type: Input
            }], error: [{
                type: Output
            }] } });

/**
 * A angular pipe to transform `Markdown` to `HTML`.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownPipe } from 'ngx-showdown';
 *
 * @NgModule({
 *   declarations: [ ShowdownPipe ];
 * })
 * export class AppModule {}
 * ```
 *
 * Transform markdown value to html.
 * ```html
 * <input type="text" placeholder="Name" [(ngModel)]="name"/>
 * <div [innerHTML]="'**Hello '+(name || 'nobody')+'!**' | showdown">
 * ```
 *
 * Transform markdown value to html with `options`.
 * ```typescript
 * import * as Showdown from 'showdown';
 *
 * @Component({
 *   selector: 'some',
 *   template: `<div innerHTML="{{ text | showdown: options }}"></div>`
 * })
 * export class SomeComponent {
 *   text: string = "__Some Underline__";
 *   options: Showdown.ShowdownOptions = { underline: true };
 *   // ...
 * }
 * ```
 */
class ShowdownPipe extends ShowdownConverter {
    /**
     * Transform markdown value to html.
     *
     * @param value - The markdown value to transform to html.
     * @param options - A `Showdown` converter options.
     * @returns Returns the transform result of `value` to html.
     */
    transform(value, options) {
        this.setOptions(options);
        return this.makeHtml(value);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, deps: null, target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, name: "showdown", pure: false });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'showdown',
                    pure: false
                }]
        }] });

/**
 * @internal
 */
const DECLARATIONS = [
    ShowdownComponent,
    ShowdownPipe,
    SourceDirective
];
/**
 * ### Example
 *
 * Add `ShowdownModule` to app `imports`.
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownModule } from 'ngx-showdown';
 *
 * @NgModule({
 *   imports: [ ShowdownModule ];
 * })
 * export class AppModule {}
 * ```
 */
class ShowdownModule {
    /**
     * __Example :__
     *
     * Add `ShowdownModule` to app `imports` with config.
     * ```typescript
     * import { NgModule } from '@angular/core';
     * import { ShowdownModule } from 'ngx-showdown';
     *
     * @NgModule({
     *   imports: [ ShowdownModule.forRoot({
     *     smartIndentationFix: true,
     *     foo: 'bar',
     *     flavor: 'github',
     *     extensions: [ {type:'listener', listeners: {'codeBlocks.after': console.log}} ]
     *   }) ];
     * })
     * export class AppModule {}
     * ```
     * @param config - A root converter config for all converter instances.
     */
    static forRoot(config) {
        return {
            ngModule: ShowdownModule,
            providers: [{ provide: ShowdownConfig, useValue: config }]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, declarations: [ShowdownComponent,
            ShowdownPipe,
            SourceDirective], exports: [ShowdownComponent,
            ShowdownPipe,
            SourceDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, providers: [ShowdownConverter] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: ShowdownModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DECLARATIONS,
                    providers: [ShowdownConverter],
                    exports: DECLARATIONS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ShowdownComponent, ShowdownConfig, ShowdownConverter, ShowdownModule, ShowdownPipe, SourceDirective };
//# sourceMappingURL=ngx-showdown.mjs.map
