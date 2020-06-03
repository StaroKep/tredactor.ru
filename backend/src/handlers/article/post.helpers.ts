import constants from 'src/constants';

import { DB } from 'db';
import { getTablePath } from 'db/helpers';

import { Article } from './types';

const { databases, tables } = constants;

export function insertNewArticle(
    data: Partial<Article>,
    onErrorCallback: Function,
    noSuccessCallback: (id: number) => void,
) {
    const { content: body, ...rest } = data;
    const stringifyedBody = JSON.stringify(body);
    console.log(stringifyedBody);

    const modyfiedData = {
        ...rest,
        body: stringifyedBody,
    };

    const tablePath = getTablePath([databases.tredactor, tables.articles]);

    const connection = DB.connect();
    connection.connect();

    connection.query(`INSERT INTO ${tablePath} SET ?`, modyfiedData, (err, result) => {
        if (err) {
            console.log(err);
            onErrorCallback();
            return;
        }

        noSuccessCallback(result.insertId);
    });

    connection.end();
}
