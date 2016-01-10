var ans = 0; //sum
for(var i=2; i<process.argv.length;i++) //starting with two because need to take third argument
{
    ans+=Number(process.argv[i]); //adding command line number to ans
}

console.log(ans);