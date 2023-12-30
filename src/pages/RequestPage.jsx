import '../css/RequestPage.css';

export function RequestPage() {
  return (
    <div className='RequestPage'>
      <form action='feedback.php' method='post' acceptCharset='utf-8'>
        <div>
          <input name='subject' value='Submission' type='hidden' />
          <input name='redirect' value='thankyou.html' type='hidden' />

          <input type='text' name='fullname' placeholder='Անուն, ազգանուն *' required />
          <input type='email' name='email' placeholder='Էլ. փոստ (e-mail) *' required />

          <input name='form_order' value='alpha' type='hidden' />
          <input name='form_delivery' value='hourly_digest' type='hidden' />
          <input name='form_format' value='html' type='hidden' />
        </div>

        <textarea name='comments' placeholder='Հաղորդագրություն *' required />
        <input type='submit' name='submit' value='Ուղարկել' />
      </form>
    </div>
  )
}


