class MessageBuilder {

    static build(msg) {
        const { subject, eventDate, capacity } = this._parseMessage(this._removeCommandPart(msg));
        return this._assignTemplate(subject, eventDate, capacity);
    }

    static _removeCommandPart(str) {
        return str.replace('/rr ', '').trim();
    }

    static _parseMessage(str) {

        const tmp0 = str.split('@');
        const tmp1 = tmp0[0].split('!');
        const capacity  = (tmp0[1] || '').trim();
        const subject   = (tmp1[0] || '').trim();
        const eventDate = (tmp1[1] || '').trim();

        return { subject, eventDate, capacity };
    }

    static _assignTemplate(subject = 'マルチ募集', eventDate, capacity) {
        const eventDateText = (eventDate) ? `\n【開催】${eventDate}` : '';
        return `
--------------------------------------------------
${subject}${eventDateText}
【人数】${(capacity)  ? `${capacity}人` : '規定人'}スタンプで〆
【備考】参加希望者はスタンプで表明
--------------------------------------------------
`;
    }

}

module.exports = MessageBuilder;
