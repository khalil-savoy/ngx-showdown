import * as Showdown from 'showdown';
export interface ShowdownConfig extends Showdown.ConverterOptions {
}
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
export declare class ShowdownConfig implements Showdown.ConverterOptions {
    /**
     * @see https://github.com/showdownjs/showdown/blob/master/README.md#flavors
     */
    flavor?: Showdown.Flavor;
    constructor(options?: ShowdownConfig | Showdown.ConverterOptions);
    /**
     * Merge options
     *
     * @param options - A options object to merge.
     */
    merge?(options: ShowdownConfig | Showdown.ConverterOptions): void;
}
