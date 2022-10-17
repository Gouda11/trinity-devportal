<script>
  import '../app.css';

</script>

<div class="container bg-black">
  <div class="flex items-center justify-between">
    <div class="">
      <img src="coding.png" alt="coding logo" srcset="" class="object-contain h-16 w-44">
    </div>
    <div class="flex space-x-6 text-slate-50">
      Welcome back, Admin
    </div>
    <div class="p-3 px-6 pt-2">
      <ul class="menu menu-horizontal p-0 text-slate-50	">
        <li>
          <label tabindex="0" class="m-1"><img src="calendar.png" class="w-5 h-5" alt="..."></label>
                  <li>
          <div class="dropdown">
            <label tabindex="0" class="m-1"><img src="us.png" class="w-5 h-5" alt="..."></label>
            <ul tabindex="0" class="dropdown-content menu mt-2 shadow bg-base-100 rounded-box w-42">
              <li><a><img src="us.png" class="w-5 h-5" alt="...">US</a></li>
              <li><a><img src="india.png" class="w-5 h-5" alt="...">Bharath</a></li>
            </ul>
          </div>
        </li>
        <li><div class="avatar">
          <div class="w-8 h-8 rounded-full">
            <img src="https://placeimg.com/192/192/people" alt="..." />
          </div>
        </div></li>
      </ul>
    </div>
  </div>

</div>

<slot></slot>

